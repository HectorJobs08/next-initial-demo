import Link from 'next/link';

// Hooks
import { useRouter } from 'next/router';

import styles from 'styles/Navbar.module.css';

export default function ActiveLink({ text, href }) {

    const { asPath } = useRouter();

    return (
        <Link
            className={asPath === href ? styles.activeLink : null}
            href={href}
        >
            {text}
        </Link>
    );
}