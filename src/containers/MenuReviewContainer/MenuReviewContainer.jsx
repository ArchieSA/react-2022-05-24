import React from "react";
import { useParams } from "react-router-dom";
import { TabsMenuReview } from "../../components/TabsMenuReview/TabsMenuReview";

export const MenuReviewContainer = ({}) => {
  const { id: restaurantId } = useParams();

  const tabs = [
    { label: "menu", restaurantId },
    { label: "review", restaurantId },
  ];

  return <TabsMenuReview tabs={tabs} />;
};
