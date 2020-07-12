import Link from 'next/link';

export default function Counselling() {
    return (
        <section className='section-text counselling'>
            <h2 className='section-title'>WHAT’S THERAPY ABOUT?</h2>
            <p>
                <strong>
                    I am often asked whether people can change – maybe that’s
                    what you want to do? I like to start with the premise that
                    we are who we are, but what we crave is a different version
                    of ourselves. So perhaps what we want to do is be able to
                    have more choice over our emotional reactions and behaviours
                    at certain times. So, if together we can learn more about
                    WHY you feel and react in the way you do, then together we
                    can work towards more choices of HOW you could feel/behave.
                    It might be that you feel the way this way because of your
                    past experiences of people, love, trauma, pain? If you could
                    understand your feelings better, maybe identify a pattern
                    and develop some control over them, then the question is
                    less, ‘can I be someone different?’ and more about being a
                    different version of yourself.
                </strong>
            </p>
            <p>
                ‘Having counselling’, ‘being in therapy’ are familiar phrases
                but what do they actually mean – what’s it like? Perhaps you
                know someone who is seeing a therapist but they can’t really
                explain what happens; they just know it seems to help. Therapy
                is a complex interaction between 2 people and can’t easily be
                reduced to a few sentences. It’s a place where past trauma can
                be shared, pain is felt but emotional alchemy can happen – as
                dramatic as in films and books. But at other times, it is felt
                in less systemic, more subtle, nuanced ways, where fleeting
                moments produce something indescribable and healing. It’s a
                difficult thing to pin down but I know from my experience that
                it is important to try to explain what therapy can do and what
                it might not do so I will always be open to discuss this with
                you.
            </p>
            <p>
                Whilst we’re here, I’ll address the difference
                between counselling and psychotherapy. They can perhaps be
                differentiated broadly by their depth and direction: Counselling
                might be more structured, tackle identified symptoms and need
                defined goals whilst Psychotherapy requires less of an agenda
                and is best suited to dealing with more profound issues such as
                trauma, abuse or a difficult childhood. But in reality, the
                similarities are greater, the ebb and the flow between both more
                common and the differences diminish.
            </p>
            <p>
                The length of therapy is possibly a better way to look at the
                question. You might come to 
                <q>
                    <b>Time-Limited</b>
                </q>
                <b> counselling</b> via a private health provider as they will
                generally fund between 6-12 sessions. This would allow us time
                to work on the symptoms you have – psychological and physical –
                and we can explore your experience of these in the context of
                your life today and your history. We would work together to find
                links, patterns and clues to help us understand what might be
                happening to you. We can explore some ideas, workshop some ‘what
                if’s’, trial some ‘how about’s’. We can work together towards a
                better expression of your feelings that are more manageable,
                with the goal of lessening your symptoms and setting a better
                path ahead. If your day-to-day regulation of your feelings can
                be improved, your emotional competency can be increased and we
                can really get you back on your feet with some sessions of short
                to medium term counselling.
            </p>
            <p>
                <b>Longer term, Open-Ended psychotherapy</b> is better suited to
                deep-rooted issues that hamper your experience of joy and
                pleasure, make relationships difficult and affect your ability
                to direct the course of your life. Perhaps you have had a
                traumatic event(s) that needs processing; maybe you have thought
                you are ‘fine’ but find in reality you are clearly not? Or have
                you suffered abuse – emotional, physical, sexual – which you
                know has profoundly affected you and now needs to be addressed.
                This we would do together with great care and respect, always
                vigilant for the effects it still has on you. In the therapeutic
                alliance, there is a comfort to be found and we make space where
                you are truly listened to and your emotions engaged with -
                however difficult - so that the healing can happen.
            </p>

            <div className='btn-box'>
                <Link href='/about'>
                    <a className='btn btn--theme'>Read about me</a>
                </Link>
                <Link href='/#online'>
                    <a className='btn btn--theme'>Online sessions</a>
                </Link>
            </div>
        </section>
    );
}
