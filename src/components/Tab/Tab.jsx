import styles from './styles.module.css';
import classnames from 'classnames';

export const Tab = ({ tabTitle, setActiveTab, isTabActive }) => (
  <button
    className={classnames({
      [styles.root]: true,
      [styles.isTabActive]: isTabActive,
    })}
    onClick={setActiveTab}
  >
    {tabTitle}
  </button>
);
