import { Tabs } from "../../components/Tabs/Tabs";
import { selectRestaurants } from "../../store/restaurant/selectors";
import { useSelector } from "react-redux";

export const TabsContainer = ({restaurantId, setRestaurantId}) => {
  const restaurants = useSelector(selectRestaurants);
  const tabs = restaurants.map(({ name, id }) => ({ label: name, id }));

  return (
      <Tabs
          tabs={tabs}
          selectedId={restaurantId}
          onTabSelect={setRestaurantId}
      />
    );
};
