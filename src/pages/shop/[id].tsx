import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Text, Spacer } from 'vcc-ui';

import { ICar } from "../../types/car";
import { readJSONFile } from "../../utils";

export default function Shop({data}: {data: ICar}){
  return (
    <Flex extend={{margin: '25px 15px'}}>
      <Text>{data.modelName}</Text>
      <Spacer/>
      <Text>{data.modelType}</Text>
      <Text>{data.bodyType}</Text>
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