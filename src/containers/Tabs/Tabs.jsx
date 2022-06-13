import { useSelector } from "react-redux";
import Tabs from "../../components/Tabs/Tabs";
import { selectTabsIds } from "../../store/tabs/selectors";

const TabsContainer = () => {
    const tabsIds = useSelector(selectTabsIds);
        
    return (
        <Tabs tabsIds={tabsIds} />
    );
};

export default TabsContainer;
