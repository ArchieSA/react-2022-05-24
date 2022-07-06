import { Header } from "../Header/Header";

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);
