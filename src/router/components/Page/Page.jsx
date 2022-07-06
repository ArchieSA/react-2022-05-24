import { useRoute } from "../../hooks/useRoute";

export const Page = ({ element, route }) => {
  const currentRoute = useRoute();

  if (route !== currentRoute) {
    return null;
  }

  return element;
};
