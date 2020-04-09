import React from 'react';

interface ComponentProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ComponentProps) => {
  return (
    <div>
      <header>App</header>
      <main>{children}</main>
      <footer>Gatsby starter by @bnguyensn</footer>
    </div>
  );
};

export default Layout;
