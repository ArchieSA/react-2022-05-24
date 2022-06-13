import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "../../components/Tab/Tab";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";
import tabsSlice from "../../store/tabs";
import { selectCurrentTabId } from "../../store/tabs/selectors";

const TabContainer = ({ tabId, className }) => {
    const restaurantName = useSelector((state) => selectRestaurantNameById(state, tabId));
    const isSelected = useSelector(selectCurrentTabId) == tabId;
    
    const dispatch = useDispatch();
    const onSelectRestaurant = useCallback(
        () => dispatch(tabsSlice.actions.select(tabId),
        [tabId])
    );

    return <Tab 
        label={restaurantName}
        onTabSelect={onSelectRestaurant}
        className={className}
        isSelected={isSelected}
    />
};

export default TabContainer;