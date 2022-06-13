import { useSelector } from 'react-redux';
import { selectTabRestaurantName } from '../../store/tab/selectors';
import { Tab } from "../../components/Tab/Tab";

const TabContainer = ({ restaurantId, onTabSelect, isSelected, className }) => {
    const label = useSelector((state) => selectTabRestaurantName(state, restaurantId));
    
    return (<Tab label={label}
                onTabSelect={onTabSelect}
                isSelected={isSelected}
                className={className}
            />);

};

export default TabContainer;