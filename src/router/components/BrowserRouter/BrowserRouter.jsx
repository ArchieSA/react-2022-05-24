import { Router } from "../../Router/Router";
import { RouterContext } from "../../RouterContext/RouterContext";

const router = new Router();

export const BrowserRouter = ({ children }) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
