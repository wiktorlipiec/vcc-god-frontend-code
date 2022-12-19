import React from 'react';
import Link from 'next/link';
import { Flex, Logo, Block } from "vcc-ui";

export const Header = () => (
  <Block as="header" extend={{marginBottom: 20, borderBottom: '1px solid black'}}>
    <Flex extend={{ padding: 16 }}>
      <Link href={'/'}>
        <Logo type="spreadmark" alt="Volvo logo" height={16} />
      </Link>
    </Flex>
  </Block>
)
