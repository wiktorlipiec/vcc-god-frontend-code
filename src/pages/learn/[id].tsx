import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Text, Card, CardContent, Spacer, Block } from "vcc-ui";
import Image from "next/image";

import { ICar } from "../../types/car";
import { readJSONFile } from "../../utils";

export default function Learn({data}: {data: ICar}){
  return (
    <Flex extend={{margin: '25px 15px'}}>
      <Card>
        <Block extend={{position: 'relative'}}>
          <Image alt={data.modelName} layout="responsive" src={data.imageUrl} width={400} height={300} />
        </Block>
        <CardContent>
          <Text variant="ootah">Volvo {data.modelName}</Text>
          <Spacer />
          <Text>{data.modelType}</Text>
        </CardContent>
      </Card>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>  {
  const getCars: ICar[] = await readJSONFile('/public/api/cars.json');

  const paths = getCars.map((car) => ({
    params: { id: car.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getCars: ICar[] = await readJSONFile('/public/api/cars.json');
  const filterByParams = getCars.filter(car => car.id === params?.id)[0];

  return {
    props: {
      data: filterByParams
    }
  } 
};