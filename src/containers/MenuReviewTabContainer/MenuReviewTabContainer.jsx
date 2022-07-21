import React from "react";
import { Tab } from "../../components/Tab/Tab";

export const MenuReviewTabContainer = ({ restaurantId, className, name }) => {

    return <Tab title={name} to={`${restaurantId}/${name}`} className={className} />;
};
