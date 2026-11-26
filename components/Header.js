import Link from 'next/link';

// Short labels are swapped in on small screens via CSS (see header.scss),
// so the header renders on the server and never mismatches during hydration.
export default function Header() {
    return (
        <header>
            <div className='logo'>
                <Link href='/'>
                    nicola<span className='color--theme'>moore</span>
                </Link>
            </div>
            <nav>
                <ul aria-label='website main navigation'>
                    <li>
                        <Link href='/about'>
                            <span className='label--long'>Get to know me</span>
                            <span className='label--short'>Therapist</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/therapy'>
                            <span className='label--long'>
                                What's therapy about?
                            </span>
                            <span className='label--short'>Therapy</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#contact'>Contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
