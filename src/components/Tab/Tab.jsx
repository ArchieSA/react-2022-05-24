import styles from './styles.module.css';

export const Tab = ({ tabTitle, setActiveTab }) => <button className={styles.root} onClick={setActiveTab}>{tabTitle}</button>;