import { Tab } from '../Tab/Tab';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Tabs = ({ tabs, setActiveTab, isTabActive }) => (
    <div className={styles.root}>
        {tabs.map((restaurant, index) => (
          <div key={restaurant.id}>
            <Tab
              tabTitle={restaurant.name}
              setActiveTab={() => setActiveTab(index)}
              isTabActive={isTabActive(index)}
            />
            {index < tabs.length - 1 && (
              <span className={classnames('tab-delimiter')}>|</span>
            )}
          </div>
        ))}
      </div>
);