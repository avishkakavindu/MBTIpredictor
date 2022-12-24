import numpy as np
import pandas as pd
import re
import string
import itertools
import tensorflow as tf
import transformers

data = pd.read_csv("backend/mbti_predictor/dataset/mbti_1.csv")
types = np.unique(data.type.values)
maxlen = 512
trained_model_path = 'backend/mbti_predictor/models/best_model_2.h5'


class MBTIPredictor():
    def __init__(self):
        self.tokenizer = transformers.AutoTokenizer.from_pretrained('distilbert-base-uncased')
        self.model = self.create_model()
        self.model.load_weights(trained_model_path)

    def clean_text(self, text):
        regex = re.compile('[%s]' % re.escape('|'))
        text = regex.sub(" ", text)
        words = str(text).split()
        words = [i.lower() + " " for i in words]
        words = [i for i in words if not "http" in i]
        words = " ".join(words)
        words = words.translate(words.maketrans('', '', string.punctuation))
        return words

    def create_model(self):
        input_word_ids = tf.keras.layers.Input(shape=(maxlen,), dtype=tf.int32,
                                               name="input_word_ids")
        bert_layer = transformers.TFDistilBertModel.from_pretrained('distilbert-base-uncased')
        bert_outputs = bert_layer(input_word_ids)[0]
        pred = tf.keras.layers.Dense(16, activation='softmax')(bert_outputs[:, 0, :])

        model = tf.keras.models.Model(inputs=input_word_ids, outputs=pred)
        loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
        model.compile(loss='categorical_crossentropy', optimizer=tf.keras.optimizers.Adam(
            learning_rate=0.00001), metrics=['accuracy'])
        return model

    def predict(self, text, top_n=3):
        cleaned_text = self.clean_text(text)
        # tokenize cleaned text
        tokenized_text = [self.tokenizer.encode(cleaned_text, max_length=maxlen, pad_to_max_length=True)]
        # get prediction array
        preds = self.model.predict(np.array(tokenized_text))[0]
        # sort by best probability and get indexes
        predictions = (-preds).argsort()
        # get mbti types to dict with encoded values | eg: {0: 'ENFJ', 1: 'ENFP', 2: 'ENTJ', ...}
        labels = dict(enumerate(types))
        # get sorted prediction probabilities and their mbti type | eg: {'INFJ': 0.7920688, 'INTP': 0.036250126, 'INFP': 0.03227163, ...}
        all_preds = {labels[i]: preds[i] for i in predictions}

        # get top n results
        return dict(itertools.islice(all_preds.items(), top_n))
