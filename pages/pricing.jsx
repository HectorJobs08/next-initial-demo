import Layout from 'components/layouts/MainLayout';

import styles from 'styles/Home.module.css';

const PricingPage = () => {
    return (
        <>
            <h1>This is <span className={styles.link}>Pricing Page</span></h1>
        </>
    );
};

PricingPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default PricingPage;