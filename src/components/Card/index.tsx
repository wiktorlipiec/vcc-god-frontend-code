import React from 'react';
import { Flex, Text, Block, Spacer } from 'vcc-ui';
import Image from 'next/image';

import { LinkComponent } from '../Link';

import { ICar } from '../../types/car';

export const Card = ({bodyType, modelName, modelType, imageUrl, id}: ICar) => (
  <Flex>
    <Flex>
      <Text subStyle="emphasis" extend={{ color: "#707070" }}>
        {bodyType.toUpperCase()}
      </Text>
      <Flex extend={{
        fromM: {
          flexDirection: 'row'
        }
      }}>
        <Text subStyle="emphasis" extend={{ paddingRight: "10px" }}>
          {modelName}
        </Text>
        <Text subStyle="emphasis" extend={{ color: "#707070" }}>
          {modelType}
        </Text>
      </Flex>
    </Flex>
    <Spacer size={2} />
    <Block extend={{position: 'relative'}}>
      <Image alt={modelName} layout="responsive" src={imageUrl} width={800} height={600} priority/>
    </Block>
    <Flex extend={{
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '10px 0'
    }}>
      <LinkComponent href={`/learn/${id}`} text="Learn" />
      <LinkComponent href={`/shop/${id}`} text="Shop" />
    </Flex>
  </Flex>
)
