from storyspace.db import db
from storyspace.db.models import Story



Story.query.delete()

stories = [
    Story(
        title       = """Not all Asians eat dog.""",
        author      = """AznGurlXoXo""",
        content     = """In high school, my friends and I were walking to our lockers. We were two Asian girls. As we were walking we overheard these two guys who were following us loudly exclaim how we like to eat dog. Just becasue I'm Asian doesn't mean I eat dog. I never have and never will.""",
        categories  = 'ethnicity',
        latitude    = 38.534,
        longitude   = -121.7591,
    ),
    Story(
        title       = """Racial Profiling""",
        author      = """Ronaldo""",
        content     = """I was stopped by a police officer while I was walking to campus. I asked: What is the problem? The officer responded: We are looking for a robbery suspect. I considered that strange since I was carrying a lot of books under my arm -- and in my backpack. I was held up for a little while then let go, but I learned that the police do not make distinctions of education, occupation, class or social status when they deal with African American men.""",
        categories  = 'ethnicity,social-class',
        latitude    = 38.54,
        longitude   = -121.75,
    ),
    Story(
        title       = """Because you're a girl""",
        author      = """Feminist""",
        content     = """Ever since I was little, I always had to wash the dishes. If I didn't, then I would be grounded. I have three brothers who did nothing after dinner, so when I was 14 I asked my dad why I always had to wash the dishes. His only answer was, "Because you're a girl." I was pissed off and we got into a fight because he never made my brothers do anything around the house. My brothers and parents expect me to have a bunch of kids and become a housewife, but ever since that day I decided to start doing things for myself and myself only.""",
        categories  = 'gender',
        latitude    = 38.546,
        longitude   = -121.7555,
    ),
    Story(
        title       = """I have a boyfriend...""",
        author      = """SingleFeminist""",
        content     = """I was at a party and the only way I could get this one guy to leave me alone was to lie and say I was in a relationship. I realized that he only valued me as another guy's property and not as a human being who deserves respect.""",
        categories  = 'gender',
        latitude    = 38.555,
        longitude   = -121.766,
    ),
    Story(
        title       = """Parents don't accept me""",
        author      = """LonelyGirl""",
        content     = """When I was in college, I started dating my roommate, who was also a girl. I never considered myself to be gay or even bisexual, so it was very different for me. I come from a very conservative, religious family, so I was constantly in denial of my feelings. My girlfriend was very patient. When I finally told my mom about our relationship, she helped me through it. Obviously, there was a lot of backlash, and my parents all but disowned me. I felt like I was the butt of every joke. I had always been the golden child with straight A's, and suddenly I was the black sheep of my family just because of who I was dating. I couldn't understand how my parents could suddenly stop loving me.""",
        categories  = 'sexuality',
        latitude    = 38.537,
        longitude   = -121.732,
    ),
    Story(
        title       = """High School struggles being trans""",
        author      = None,
        content     = """Being trans in high school has to be one of the toughest things because on top of academic responsibility, your social life needs to be looked over. I believe this goes for everyone. But it's exceptionally hard to deal with when people can't just accept you for who you are. According to society, abnormal just isn't right, and though I don't do anything to purposefully make anyone upset with me, I am still dealing with a lot of harassment. My other trans friends say that's why they didn't come out in high school.""",
        categories  = 'sexuality',
        latitude    = 38.547,
        longitude   = -121.732,
    ),
    Story(
        title       = """Just trying to survive""",
        author      = """Charles""",
        content     = """I'm just trying to survive. I don't have any money in the bank. I pick up whatever minimum wage jobs that I can, mainly fast food. At the job program, they tell us that we should never tell an interviewer: 'I need a job.' Instead we're supposed to say: 'I like customer service.' That's true for me though. I do feel good when I'm providing customer service. It helps me not worry about all the other stuff in my life.""",
        categories  = 'social-class',
        latitude    = 38.543,
        longitude   = -121.720,
    ),
    Story(
        title       = """Need for change""",
        author      = """Activist Gal""",
        content     = """Throughout human history, most people live and die in the social class into which they were born. If they were born poor, chances are they will die poor. One way societies can help people rise in social class is to initiate new enterprises, like improved educational opportunities or technological advancements. When this happens, the need for workers in higher-class jobs motivates and enables people to move up in social class, which can help them to escape poverty.""",
        categories  = 'social-class',
        latitude    = 38.539,
        longitude   = -121.748,
    ),
    Story(
        title       = """Need for change (No locations)""",
        author      = """Activist Gal""",
        content     = """Throughout human history, most people live and die in the social class into which they were born. If they were born poor, chances are they will die poor. One way societies can help people rise in social class is to initiate new enterprises, like improved educational opportunities or technological advancements. When this happens, the need for workers in higher-class jobs motivates and enables people to move up in social class, which can help them to escape poverty.""",
        categories  = 'social-class',
    ),
]

for story in stories:
    db.session.add(story)

db.session.commit()
