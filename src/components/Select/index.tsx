import React from "react";
import { Block, SelectInput } from "vcc-ui";
import { SetStateAction, Dispatch } from "react";

interface ISelectProps {
  label: string;
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>
  options: Array<string>
}

export const Select = ({label, options, selectValue, setSelectValue}: ISelectProps) => (
  <Block extend={{width: 300, margin: '50px 15px'}}>
    <SelectInput
      label={label}
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value)}
      aria-label="select"
    >
      <option value="all">All</option>
      {options.map((option: string) => {
        return (
          <option value={option} key={option}>
            {option.toUpperCase()}
          </option>
        );
      })}
    </SelectInput>
  </Block>
)