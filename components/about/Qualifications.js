export default function Qualifications() {
    return (
        <section>
            <section className='nicola'>
                <div className='section-img'>
                    <div className='cover cover--white'></div>
                    <div className='section-stripline'>
                        <span className='color--theme'>Nicola </span>Moore
                        <p>
                            Qualified and Registered Psychotherapist. <br />
                            Experienced in working with adults of all
                            backgrounds.
                        </p>
                    </div>
                </div>
                <div className='section-text bg--theme bg--secondary-dark'>
                    <h2 className='section-title'>WHO AM I?</h2>
                    <p>
                        I am a fully qualified Psychotherapist and hold a
                        Postgraduate Diploma in Psychodynamic Theory and
                        Practice from WPF, a highly regarded training
                        institution in London that combines academic study of
                        theory alongside clinical experience.
                    </p>

                    <p>
                        Aside from my private practice, I have worked within the
                        NHS and not-for-profit charities where I have seen a
                        diverse group of service users. In addition I have
                        extensive experience as a forensic psychotherapist
                        working with clients in a secure setting.
                    </p>
                    <p>
                        I believe in the importance of continuing my
                        professional development and regularly attend workshops
                        and seminars to develop skills based on the practice of
                        classic psychoanalytic theories, contemporary
                        psychological practices now being developed from fields
                        such as neuroscience and psychology.
                    </p>
                    <p>
                        Before working in this field I had a career in creative
                        businesses and I am particularly interested in how to
                        work effectively with creative talent within the
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
