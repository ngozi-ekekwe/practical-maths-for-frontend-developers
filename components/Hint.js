import styles from '../styles/SharedComponents.module.css'

export default function Hint({ children }) {
  return (
    <div className={styles.hint}>
      {children}
    </div>
  );
}
