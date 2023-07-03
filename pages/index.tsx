import Layout from 'components/layouts/MainLayout';

import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <h1>This is <span className={styles.link}>Home Page</span></h1>
    </Layout>
  )
}
