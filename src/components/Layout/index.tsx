import React from 'react';
import { Flex, Logo, Block } from "vcc-ui";
import Link from 'next/link';

interface ILayoutProps {
  children: React.ReactChild;
}

export const Layout = ({children}:ILayoutProps) => (
  <div>
    <Block as="header" extend={{marginBottom: 20, borderBottom: '1px solid black'}}>
      <Flex extend={{ padding: 16 }}>
        <Link href={'/'}>
          <Logo type="spreadmark" alt="Volvo logo" height={16} />
        </Link>
      </Flex>
    </Block>
    {children}
  </div>
);
