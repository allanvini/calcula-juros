import styles from './navbar.module.scss'
export default function NavBar({ children }) {
    return (
        <nav className={styles.nav_container}>
            {children}
        </nav>
    )
}