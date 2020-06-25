import { faqs } from './faqs';

export default function FAQ() {
    const toggleOpening = (e) => {
        const plusEl = e.target.closest('summary').querySelector('.plus');
        plusEl.classList.toggle('open');
    };
    return (
        <section className='section-text bg--secondary-light faqs' id='faqs'>
            <h2 className='section-title'>FAQs</h2>
            <ul aria-label='frequently asked questions'>
                {faqs.map((faq, i) => (
                    <li key={'faq_' + i}>
                        <details>
                            <summary onClick={toggleOpening}>
                                <b>{faq.q}</b>
                                <div className='plus'>
                                    <span></span>
                                    <span></span>
                                </div>
                            </summary>
                            {faq.a}
                        </details>
                    </li>
                ))}
            </ul>
        </section>
    );
}
