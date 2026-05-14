import { Inter, Dancing_Script } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-cursive',
});

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${inter.variable} ${dancingScript.variable}`} suppressHydrationWarning>
            <LenisScroll />
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
