import '../styles/styles.scss';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GoogleAnalytics />
            <Component {...pageProps} />
        </>
    );
}
