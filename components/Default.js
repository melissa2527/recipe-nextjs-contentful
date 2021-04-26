import styles from './Default.module.scss';

const Default = () => {
    return (
        <div className={styles.default_container}>
            <div className={styles.banner}></div>
            <div className={styles.header}></div>
            <div className={styles.content}></div>
            <div className={styles.content}></div>
        </div>
    )
}

export default Default
