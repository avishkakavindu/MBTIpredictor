from predictor import MBTIPredictor

if __name__ == '__main__':
    mbti_predictor = MBTIPredictor()

    text = """Being an INFJ is different for everyone. For me, I overthink everything.
    
    It's a constant battle of "why?", and I question the universe. Constantly. It's quite tiresome. I live in my head, and zone out everywhere just thinking. I read a lot, and I feel emotions very strongly.
    
    When I walk into a room, I can sense the atmosphere, and I can sense how people are feeling.
    
    When I'm around certain people, I tend to mirror them; how they act, how they talk. The effect can last for some time.
    
    """

    print(mbti_predictor.predict(text, 3))