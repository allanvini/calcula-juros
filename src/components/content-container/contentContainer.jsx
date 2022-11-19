import styles from './contentContainer.module.scss'
export default function ContentContainer({ children }) {
    return (
        <div className={styles.content_container}>
            {children}
        </div>
    )
}