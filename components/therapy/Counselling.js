import Link from 'next/link';

export default function Counselling() {
    return (
        <section className='section-text counselling'>
            <h2 className='section-title'>WHAT’S THERAPY ABOUT?</h2>
            <p>
                <strong>
                    ‘Having counselling’, ‘being in therapy’ are familiar
                    phrases but what do they actually mean – what’s it like?
                    Perhaps you know someone who is seeing a therapist but they
                    can’t really explain what happens; they just know it seems
                    to help. Therapy is a complex interaction between 2 people
                    and can’t easily be reduced to a few sentences. It’s a place
                    where past trauma can be shared, pain is felt but emotional
                    alchemy can happen – sometimes as dramatic as in films and books. And
                    then at other times, it is felt in more subtle, nuanced
                    ways, where fleeting moments produce something indescribable
                    and even healing. It’s a difficult thing to pin down but I am asked about it so often that I feel it is important to try to
                    explain what therapy can do;  and aslo what it might not do. I will always be open to discuss this with you.
                </strong>
            </p>
            <p>
                I am often asked whether people can change – maybe that’s what
                you want to do? I like to start with the premise that we are who
                we are, but what we crave is a different version of ourselves.
                So perhaps what we want to do is to be able to have more choice
                over our emotional reactions and behaviours at certain times.
                If we can learn more about WHY you feel and react in the way
                you do, then we can work towards giving you choices of HOW you
                could feel and behave in the future. It might be that you feel this way
                because of your past experiences of people which have been
                traumatic, painful or have let you down If you could understand
                your feelings better, maybe identify a pattern and develop some
                control over them, then theres a real chance of being that
                different version of yourself.
            </p>
            <p>
                What about the difference
                between counselling and psychotherapy? They can perhaps be
                differentiated broadly by their depth and direction: counselling
                can feel more structured, tackle identified symptoms and need
                defined goals whilst psychotherapy thrives with less of an agenda
                and is best suited to dealing with more profound, intractable
                issues such as trauma, abuse or a difficult childhood. But in
                reality, the similarities are greater, the ebb and the flow
                between both more common and the differences diminished.
            </p>
            <p>
                The length of therapy is possibly a better way to look at the
                question. You might come to 
                <q>
                    <b>Short Term</b>
                </q>
                {' or '}
                <q>
                    <b>Time-Limited</b>
                </q>
                <b> counselling</b> via a private health provider who will
                generally fund between 6-12 sessions. This would allow us time
                to work on the symptoms you have – psychological and even physical –
                and we can explore your experience of these in the context of
                your life today and your history. We would work together to find
                links, patterns and clues to help us understand what might be
                happening to you. We can work on ideas, workshop some{' '}
                ‘what if’s’, trial some ‘how about’s’. We can work
                together towards a better expression of your feelings that are
                more manageable, with the goal of lessening your symptoms and
                setting a better path ahead. If your day-to-day regulation of
                your feelings can be improved, your emotional competency can be
                increased and we can really get you back on your feet with some
                sessions of short to medium term counselling.
            </p>
            <p>
                <b>Longer term, Open-Ended psychotherapy</b> is better suited to
                deep-rooted issues that hamper your experience of joy and
                pleasure, make relationships difficult and affect your ability
                to direct the course of your life. It is also a better forum to
                process a traumatic event(s); maybe you have thought you are
                ‘fine’ but find in reality you are clearly not? If you have
                suffered abuse – emotional, physical, sexual – you will know how
                profoundly this can affect emotional growth and hamper psychological and physical wellbeing. If these issues you know about 
                and need now address this would benefit from the longer
                and less-structured time open-ended therapy facilitates. We would work together with great care and respect, always vigilant for the
                effects past trauma still has on you. In the therapeutic alliance, there
                is comfort to be found and we make space where you are truly
                listened to and your emotions - however difficult - are engaged with, 
                so that the healing can happen.
            </p>

            <div className='btn-box'>
                <Link href='/about'>
                    <a className='btn btn--theme'>Read about me</a>
                </Link>
            </div>
        </section>
    );
}
