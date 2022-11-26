import React from "react";
import { Tab } from "../../components/Tab/Tab";

interface Interface {
     restaurantId?: string, className?: {}, name?: string
}
export const MenuReviewTabContainer = ({ restaurantId, className, name }: Interface) => {

    return <Tab title={name} to={`${restaurantId}/${name}`} className={className} />;
};
