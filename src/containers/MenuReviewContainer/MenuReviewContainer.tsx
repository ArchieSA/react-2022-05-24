import React from "react";
import { useParams } from "react-router-dom";
import { Tabs } from "../../components/Tabs/Tabs";
import { MenuReviewTabContainer } from "../MenuReviewTabContainer/MenuReviewTabContainer";

export const MenuReviewContainer = ({}) => {
  const { restaurantId } = useParams();
  // console.log({ to: restaurantId });
  const tabs = ["menu", "review"];

  // type RenderTab = {
  //   id: string;
  // };
  return (
    <Tabs
      renderTab={(id?: string) => (
        <MenuReviewTabContainer
          key={id}
          restaurantId={restaurantId}
          className={{ background: "none" }}
          name={id}
        />
      )}
      tabIds={tabs}
      className={{ backgroundColor: "#d7878745" }}
    />
  );
};
