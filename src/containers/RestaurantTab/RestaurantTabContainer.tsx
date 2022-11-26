import React from "react";
import { Tab } from "../../components/Tab/Tab";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useAppSelector} from "../../hooks/hook_ts";

interface Interface {
  restaurantId?: string,
  className?: string
}
export const RestaurantTabContainer: React.FC<Interface> = ({ restaurantId, className }) => {
  // console.log(restaurantId);
  const restaurantName = useAppSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  return <Tab title={restaurantName} to={restaurantId} className={className} />;
};
