import React from 'react';
import Select, { OnChangeValue } from 'react-select';


export type Options = {
  value: string;
  label: string;
}



interface MultiSelectProps {
  options: Options[];
  value?: Options[];
  placeholder?: string;
  onChange: (value: Options[]) => void;
}

type MultiSelectValueType = OnChangeValue<Options, true>;


const MultiSelect: React.FC<MultiSelectProps> = ({
  value, 
  options,
  placeholder, 
  onChange 

  }) => {

    
    
  
  return (
    <Select
      isMulti
      options={options}
      closeMenuOnSelect={false}
      placeholder={placeholder}
      value={value}
      onChange={(value: MultiSelectValueType) => onChange(value as Options[])}
      classNames={{
        control: () => 'p-2 border-2',
        input: () => 'text-sm',
        option: () => 'text-sm'
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#eae4ff'
        }
      })}
      styles={{
        menu: (provided, state) => ({
          ...provided,
          zIndex: 9999 // set the desired zIndex value here
        })
  }}
/>
  );
};

export default MultiSelect;