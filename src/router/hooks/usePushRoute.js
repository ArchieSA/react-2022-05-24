import { useContext } from "react";
import { RouterContext } from "../RouterContext/RouterContext";

export const usePushRoute = () => {
  const router = useContext(RouterContext);

  return router.pushRoute.bind(router);
};
