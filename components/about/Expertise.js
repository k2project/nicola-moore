import Link from 'next/link';

export default function Expertise() {
    return (
        <section className='section-text'>
            <h2 className='section-title'>HOW AND WHAT CAN I HELP WITH?</h2>

            <p>
                My training leads me to work largely, but by no means
                exclusively, in a model called Psychodynamic psychotherapy. A
                key emphasis is on the exploration of early parts of your life,
                key carers and their role and significance to you. We will look
                at these past influences to develop ideas on how they, along
                with unconscious motives, might impact on your present life.
                Thinking together about important events in your life –
                traumatic or otherwise - can help you recognise how patterns
                might have evolved. We can discover, what shaped your behaviour
                and emotions and what might be causing the problems in your
                relationships and your emotional wellbeing.
            </p>

            <p>
                I respect that you will need to talk about deeply personal
                issues – indeed this might be the first time you have ever
                spoken of them. There will be painful events and difficult
                emotion to recount and relive. We will explore their meaning
                together and therefore help you understand yourself differently
                and to relieve the symptoms that trouble and inhibit you.
            </p>
            <p>
                We can also think about your daily experience of life - the
                here-and-now. You can tell me what being YOU feels like, how you
                work, play and love and how you experience your relationships.
            </p>
            <p>
                It can feel a bit odd talking to a stranger about such intimate
                matters but it is also this unique angle that becomes the very
                particular relationship that is therapy, where real opportunity
                for a shift within you happen. It is very different from any
                friendships you may have. A key part of therapy is the
                development of this therapeutic alliance and beneficial
                therapeutic change can come about from having a conversation
                with someone who can see your life through a different lens -
                someone like me.
            </p>
            <p>
                I approach you and your world with an open mind and without
                judgement where all aspects of human expression can be
                discussed. I welcome adults of all race, colour, religion,
                sexuality and gender orientation.
            </p>

            <ul className='expertise' aria-label="Nicola's Expertise">
                <li>
                    <img src='/imgs/couple_fighting.png' alt='' />
                    <p>
                        <b>ANGER</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/women_sad.png' alt='' />
                    <p>
                        <b>ANXIETY</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/women_w_umbrella.png' alt='' />
                    <p>
                        <b>BODY DYSMORPHIA</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/women_crying.png' alt='' />
                    <p>
                        <b>DEPRESSED MOOD</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/couple1.png' alt='' />
                    <p>
                        <b>RELATIONSHIP</b>
                    </p>
                </li>

                <li>
                    <img src='/imgs/man_selfy.png' alt='' />
                    <p>
                        <b>SELF-ESTEEM</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/gays.png' alt='' />
                    <p>
                        <b>SEXUALITY &amp; GENDER</b>
                    </p>
                </li>
                <li>
                    <img src='/imgs/couple2.png' alt='' />
                    <p>
                        <b>TRAUMA &amp; GRIEF</b>
                    </p>
                </li>
            </ul>
            <p>
                Amongst the many different issues, I have experience in are:
                anxiety, depressed mood, anger, trauma, relationship
                dissatisfaction, attachment issues, grief, body dysmorphia,
                issues with sexuality and gender, low self-esteem and
                self-identity. I am also, an experienced forensic
                psychotherapist and therefore can help if you have past
                convictions and/or have served time.
            </p>
            <p>
                <strong>
                    Together we can explore the issues that might inform us,
                    help us make links within your life and thus move towards a
                    different view, giving you options that you never felt you
                    had; this is the change you are seeking.
                </strong>
            </p>
            <div className='btn-box'>
                <Link href='/therapy'>
                    <a className='btn btn--theme'>More about therapy</a>
                </Link>
                <Link href='/therapy#faq'>
                    <a className='btn btn--theme'>FAQ</a>
                </Link>
            </div>
        </section>
    );
}
