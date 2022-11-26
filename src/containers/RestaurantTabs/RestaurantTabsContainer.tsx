import React from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantIdsFilteredByName,
  selectRestaurants,
} from "../../store/restaurant/selectors";
import { useSearchParams } from "react-router-dom";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import {useAppSelector} from "../../hooks/hook_ts";
import {Tabs} from "../../components/Tabs/Tabs";

// interface Interface {
//    id: string | undefined;
//    className?: string
// }
export const RestaurantTabsContainer = ({}) => {
  // const [searchParams] = useSearchParams();
  const restaurantIds = useAppSelector((state) =>
    selectRestaurantIdsFilteredByName(state)
  );
  // console.log(restaurantIds);
  if (restaurantIds?.length === 0) {
    return null;
  }

  return (
    <Tabs
      renderTab={(id?: string, className?: string) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          className={className}
        />
      )}
      tabIds={restaurantIds}
      // className={className}
    />
  );
};
