export default function Qualifications() {
    return (
        <section>
            <section className='nicola'>
                <div className='section-img'>
                    <div className='cover cover--white'></div>
                    <div className='section-stripline'>
                        {/* <span className='color--theme'>Nicola </span>Moore */}
                        Qualified
                        <br /> <b>Psychotherapist</b>
                        <br /> in London
                    </div>
                </div>
                <div
                    className='section-text bg--theme bg--secondary-dark'
                    id='main'
                >
                    <h2 className='section-title'>WHO AM I?</h2>
                    <p>
                        I am a fully qualified Psychotherapist and hold a
                        Postgraduate Diploma in Psychodynamic Psychotherapy
                        Theory &amp; Practice from WPF, a highly regarded
                        training institution in London that combines the
                        academic study of theory with clinical experience. The
                        course is ratified by Roehampton University.
                    </p>

                    <p>
                        Aside from my private practice, I have worked within the
                        NHS and charities seeing a diverse group of service
                        users. In addition, I have extensive experience as a
                        forensic psychotherapist with clients in a secure
                        setting.
                    </p>
                    <p>
                        I believe in the importance of continuing my
                        professional development and regularly attend workshops
                        and seminars to develop skills and explore thinking
                        using a wide range of theories, from classic
                        psychoanalysis to techniques developing from psychology
                        and neuroscience.
                    </p>
                    <p>
                        Before becoming a psychotherapist I had a career in
                        creative business and I am particularly interested in
                        how creative talent works effectively within the
                        commercial world.
                    </p>

                    <ul
                        aria-labelledby='membership'
                        className='professional-bodies'
                    >
                        <li>
                            <img
                                src='/imgs/ukcplogo.png'
                                alt='UK Council
                                for Psychotherapy member'
                            />
                        </li>
                        <li>
                            <img
                                src='/imgs/fpc.png'
                                alt='FPC (the graduate body of WPF) member'
                            />
                        </li>
                        <li>
                            <img
                                src='/imgs/bpclogo.png'
                                alt='British Psychoanalytic
                                Council member'
                            />
                        </li>
                    </ul>

                    <p id='membership'>
                        <strong>
                            I am a registered member of the UKCP (UK Council for
                            Psychotherapy), BPC (British Psychoanalytic Council)
                            and FPC (the graduate body of WPF) and I comply with
                            their professional ethical codes.
                        </strong>
                    </p>
                </div>
            </section>
        </section>
    );
}
