import { Inter } from 'next/font/google';

import ActiveLink from 'components/ActiveLink';
import styles from 'styles/Navbar.module.css';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {

    const menuItems = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'About',
            href: '/about',
        },
        {
            text: 'Contact',
            href: '/contact',
        },
        {
            text: 'Pricing',
            href: '/pricing',
        },
        
    ];

    return (
        <div className={styles.container}>
            <nav className={`${styles.navbar} ${inter.className}`}>
                {menuItems.map(({text, href}, index) => (
                    <li key={`item${index}`} className={styles.navbarLink}>
                        <ActiveLink text={text} href={href} />
                    </li>
                ))}
            </nav>
        </div>
    )
};

export default Navbar;