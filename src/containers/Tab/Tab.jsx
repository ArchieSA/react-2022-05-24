import { useSelector } from "react-redux";
import { Tab } from "../../components/Tab/Tab";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";

const TabContainer = ({id, onTabSelect, isSelected, className}) => {
    const restaurentNameById = useSelector((state) => selectRestaurantNameById(state, id));

    return <Tab 
            key={id}
            label={restaurentNameById}
            onTabSelect={() => onTabSelect(id)}
            isSelected={isSelected}
            className={className}/>
}

export default TabContainer;
