import Link from 'next/link';

export default function Fees() {
    return (
        <section className='section-text bg--theme fees' id='fees'>
            <h2 className='section-title'>Fees</h2>
            <p>
                <b>An initial consultation is £50</b> £50 and is where we start.
                 You will be able to tell me something about yourself and what
                you think the issue(s) is that you want to tackle. We can
                discuss what therapy might be like for you and what the time
                commitment is so that you can make arrangements. I consider this
                first meeting as part of the therapy, which is why I charge.
            </p>
            <p>Together we can discuss the best way forward for you.</p>
            <p>
                <strong>Ongoing fees are £85 per session.</strong>
            </p>
            <p>
                There are certain circumstances for which I might be able to
                offer a lower fee. When we meet we will be able to discuss that
                more fully, including my policy regarding missed sessions and
                holidays.
            </p>
            <p>
                <b>
                    I am registered with major health insurers such as BUPA, AXA
                    PPP, Aviva, Vitality Health &amp; Cigna.
                </b>{' '}
                If you have insurance, it is worth enquiring whether you are
                eligible for counselling through them and all or most of the
                cost will be covered by the policy. This Time-Limited allocation
                can be an excellent way to get the support you need.
            </p>
            <div className='btn-box'>
                <Link href='/#contact'>
                    <a className='btn'>Request a session now</a>
                </Link>
            </div>
        </section>
    );
}
