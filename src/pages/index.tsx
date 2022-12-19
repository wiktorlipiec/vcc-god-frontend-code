import { useCallback, useEffect, useState } from "react";

import { Slider, Card, Select } from "../components";
import { readJSONFile } from "../utils";

import { ICar } from "../types/car";

interface IHomeProps {
  data: ICar[];
}

export default function Home({ data }: IHomeProps) {
  const [selectValue, setSelectValue] = useState('');
  const [filteredValue, setFilteredValue] = useState<ICar[]>([]);
  const carType = [...new Set(data.map((car) => car.bodyType))];

  const cars = useCallback(() => {
    if(selectValue === '' || selectValue === 'all'){
      setFilteredValue(data)
    } else {
      setFilteredValue(data.filter(car => selectValue === car.bodyType));
    }
  },[data, selectValue]);

  useEffect(() => {cars()},[cars]);

  return (
    <>
      <Select 
        label="Select body type" 
        selectValue={selectValue} 
        options={carType} 
        setSelectValue={setSelectValue}
      />
      <Slider>
        {filteredValue.map((car) => (
          <Card key={car.id} {...car}/>
        ))}
      </Slider>
    </>
  )
}

export async function getStaticProps() {
  //When we have API or Dev mode
  // const getCars: ICar[] = await httpGetRequest('http://localhost:3000/api/cars.json');
  const getCars: ICar[] = await readJSONFile('/public/api/cars.json');

  return {
  props: {
    data: getCars
  }
 } 
};

