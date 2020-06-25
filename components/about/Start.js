import Link from 'next/link';

export default function Start() {
    return (
        <section className='section-text bg--secondary-light start'>
            <h2 className='section-title'>WHERE DO WE START?</h2>

            <p>
                It’s very common to want to ‘shop around’ and meet more than one
                therapist – talking with me has to feel that there is potential
                to develop this special therapeutic relationship. Once you have
                made contact (please use the contact form below), I ususally
                suggest we have a brief phone call to ascertain if I can offer
                you the right support and if so, we meet to have an{' '}
                <Link href='/therapy#fees'>
                    <a>initial consultation.</a>
                </Link>{' '}
                If speaking with me then doesn’t feel right for you, I do not
                take it personally and encourage you to seek help elsewhere with
                someone you feel is better suited.
            </p>

            <div className='btn-box'>
                <Link href='/therapy#fees'>
                    <a className='btn btn--theme'>Fees</a>
                </Link>
                <Link href='/#contact'>
                    <a className='btn btn--theme'>Contact me</a>
                </Link>
            </div>
        </section>
    );
}
