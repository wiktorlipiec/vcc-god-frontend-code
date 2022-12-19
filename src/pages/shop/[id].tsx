import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Text, Spacer } from 'vcc-ui';

import { ICar } from "../../types/car";
import { getCars, filterCarById } from "../../utils";

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
  const cars: ICar[] = await getCars();
  const paths = cars.map((car) => ({
    params: { id: car.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cars: ICar[] = await getCars();
  const filterByParams = filterCarById(cars, params?.id);
  return {
    props: {
      data: filterByParams
    }
  } 
};