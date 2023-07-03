import Layout from 'components/layouts/MainLayout';
import DarkLayout from 'components/layouts/DarkLayout';
import styles from 'styles/Home.module.css';

export default function About() {
    return (
        <>
            <h1>This is <span className={styles.link}>About Page</span></h1>
        </>
    )
}

About.getLayout = function getLayout(page: React.JSX.Element) {
    return (
        <Layout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </Layout>
    )
}