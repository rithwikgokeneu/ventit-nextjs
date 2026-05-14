import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Vententit',
    description: 'Vententit — AI-powered platform to create and edit websites, blogs, and more without any coding knowledge.',
    appleWebApp: {
        title: 'Vententit',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
