import { Header } from "../Header/Header";
import React from 'react';

interface Interface {
    children: React.ReactNode;
}

export const Layout: React.FC<Interface> = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);
