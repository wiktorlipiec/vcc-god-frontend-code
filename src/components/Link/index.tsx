import React from 'react';
import Link from 'next/link';
import { Link as VccLink, Block } from 'vcc-ui';

interface ILinkComponentProps {
  href: string;
  text: string;
}

export const LinkComponent = ({href, text}: ILinkComponentProps) => (
  <Block extend={{margin: '0 15px'}}>
    <Link href={href} passHref>
      <VccLink arrow="right">
        {text}
      </VccLink>
    </Link>
  </Block>
)