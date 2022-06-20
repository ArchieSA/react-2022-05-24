import { useRef, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { RouterContext } from "../RouterContext/RouterContext";

export const useRoute = () => {
  const componentKey = useRef(nanoid());

  const [route, setRoute] = useState();
  const router = useContext(RouterContext);

  useEffect(() => {
    router.subscribe(componentKey.current, (route) => setRoute(route));

    return () => router.unsubscribe(componentKey.current);
  }, []);

  return route;
};
