import { Tabs } from "../../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/restaurant/selectors";

const TabsContainer = ({onTabSelect, selectedId}) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return <Tabs tabs={restaurantIds} onTabSelect={onTabSelect} selectedId={selectedId}/>
}

export default TabsContainer;