import React from 'react';

import { Header } from '../Header';

interface ILayoutProps {
  children: React.ReactChild;
}

export const Layout = ({children}:ILayoutProps) => (
  <div>
    <Header />
    {children}
  </div>
);
