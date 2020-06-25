import Link from 'next/link';

export default function Counselling() {
    return (
        <section className='section-text counselling'>
            <h2 className='section-title'>WHAT’S THERAPY ABOUT?</h2>
            <p>
                <strong>
                    I am often asked whether people can change – perhaps that’s
                    what you want to do? I like to start with the premise that
                    we are who we are but, what we crave is a different version
                    of ourselves. So perhaps what we want to do is be able to
                    CHOSE to change our emotional reactions and therefore
                    behaviours patterns at certain times. So if together we can
                    more about WHY you feel and react in the way you do – this
                    might be because of your past experiences of people, love,
                    trauma, pain – then you can work towards giving yourself
                    choices. Feeling less locked-in to a pattern, as if there I
                    only ever one way is often why we want to be different – to
                    change into someone different – rather than be a different
                    version of us.
                </strong>
            </p>
            <p>
                ‘Having counselling’, ‘being in therapy’ are phrases we often
                hear but what’s it actually mean – what’s it like? Perhaps you
                know someone who is seeing a therapist but they can’t really
                explain to you what happens? Therapy is a deeply complex
                interaction between 2 people and can’t easily be reduced to a
                few sentences where past trauma can be shared, much pain is felt
                and emotional alchemy can happen – the stuff of films and books.
                But at other times, it is felt to be less dramatic, much more
                subtle, nuanced, where fleeting moments produce something
                indescribable and yet it seems to help. It’s a difficult thing
                to pin down but I know from my experience that it is important
                to try to explain what therapy can do and what it might not do
                and whilst we here, I’ll address the difference between
                <i> counselling </i>and <i>psychotherapy</i>.
            </p>
            <p>
                Counselling and psychotherapy can perhaps be differentiated
                broadly by their depth and direction: the former might be more
                structured, tackle symptoms and therefore need defined goals and
                the latter requiring less of an agenda but dealing with more
                profound issues. But in reality, the similarities are greater,
                the ebb and flow between both more common and the differences
                diminish and only serve to complicate.
            </p>
            <p>
                The length of therapy is possibly a better way to look at this.
                You might come to <b>‘Time- Limited’ counselling</b> via a
                private health provider as they will generally fund between 6-12
                sessions. This would allow us time to work on the symptoms you
                have – sometimes physical – and we would explore your experience
                of these in the context of your life today and your history. We
                would work together to find links, patterns and clues to help us
                understand what might be happening to you. We can explore some
                ideas, workshop some ‘what if’s’, trial some ‘how about’s’,
                working together towards a better expression of your feelings
                with the goal of lessening your symptoms and setting a better
                path ahead. If your day-to-day competency can be increased and
                your emotions better regulated then you can really get you back
                on your feet with this short to medium term counselling.
            </p>
            <p>
                <b>Longer term, Open-Ended psychotherapy</b> is better suited to
                deep-rooted issues that hamper your experience of joy and
                pleasure, make relationships difficult and hamper your ability
                to direct the course of your life. Perhaps you have had a
                traumatic event that needs help processing; maybe you have
                thought you are ‘fine’ but find you are now not. Or have you
                suffered sustained abuse – emotional, physical, sexual – which
                has profoundly effected you and but now needs to be addressed.
                This we would do together with great care and respect, always
                vigilant for the effects it still has on you. In the therapeutic
                alliance there is comfort to be found and we make space where
                you are truly listened to and your emotions engaged with,
                however difficult, so that the healing can happen.
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
