import Link from 'next/link';

export default function Expertise() {
    return (
        <section className='section-text'>
            <h2 className='section-title'>HOW AND WHAT CAN I HELP WITH?</h2>

            <p>
                A key part of therapy is the development of a strong alliance
                between us so that you can fully make use of the therapeutic
                process, that puts emphasis on the exploration of early parts of
                your life, key carers and their role and significance to you. It
                can feel a bit odd talking to a stranger about such intimate
                matters but it is also this unique angle that becomes a very
                particular relationship and provides real opportunity for the
                shift within you; it is very different to friendship.
            </p>
            <p>
                I respect that you might need to talk about issues that are
                deeply personal – indeed this might be the first time they are
                ever spoken of – and there will be painful events and difficult
                emotion to feel. Our aim will be to help you understand yourself
                differently and to relieve the symptoms that trouble and inhibit
                you.
            </p>
            <p>
                Amongst the many different issues I have experience in, I can
                help with anxiety, depressed mood, anger, trauma, relationship
                dissatisfaction, attachment issues, grief, body dysmorphia,
                issues with sexuality and gender, low self-esteem and
                self-identity. I approach you and your world with an open mind
                and without judgement where all aspects of human expression can
                be discussed. I welcome adults of all race, colour, religion,
                sexuality and gender orientation.
            </p>

            <ul className='expertise' aria-level='experienced in'>
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
                <strong>
                    Together we can explore the issues that might inform us,
                    help us make links within your life and thus move towards a
                    different view which gives you options that you felt you
                    never had; this is the change you are seeking.
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
