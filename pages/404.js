import Link from 'next/link';
import Seo from '../components/seo/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
    return (
        <>
            <Seo
                title='Page not found'
                description='The page you were looking for does not exist.'
                path='/404'
                noindex
            />
            <Header />
            <main id='main' className='section-text txt-center'>
                <h1 className='section-title'>Page not found.</h1>
                <p>Sorry, the page you were looking for doesn’t exist.</p>
                <div className='btn-box'>
                    <Link href='/' className='btn btn--theme'>
                        Go to the home page
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
