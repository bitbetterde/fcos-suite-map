import React from 'react';
import type { Theme } from 'react-select';
import Select, { NamedProps, StylesConfig } from 'react-select';

const MultiSelect = <OptionType,>(props: NamedProps<OptionType, true>): JSX.Element => {
  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided) => ({ ...provided, border: '0', borderRadius: '0.5em' }),
    multiValue: (provided) => ({ ...provided, borderRadius: '999px', padding: '0 3px' }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'hsl(0, 0%, 50%)',
      '&:hover': { backgroundColor: 'initial', color: 'black' },
    }),
  };

  return (
    <Select
      theme={(theme): Theme => ({
        ...theme,
        // @ts-expect-error: ThemeConfig type from definitely-typed is not complete
        borderRadius: '0.5em',
        colors: {
          ...theme.colors,
          primary25: '#C7D2FE',
        },
      })}
      styles={customStyles}
      isMulti={true}
      name="pois"
      className="hover:border-opacity-40 rounded-lg w-full border-2 border-black border-opacity-20 focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 mt-1"
      {...props}
    />
  );
};

export default MultiSelect;
