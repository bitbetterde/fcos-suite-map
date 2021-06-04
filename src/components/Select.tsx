import React from 'react';
import type { Theme } from 'react-select';
import ReactSelect, { NamedProps, StylesConfig } from 'react-select';

const Select = <OptionType, isMulti extends boolean>(props: NamedProps<OptionType, isMulti>): JSX.Element => {
  const customStyles: StylesConfig<OptionType, isMulti> = {
    control: (provided) => ({ ...provided, border: '0', borderRadius: '0.5em' }),
    multiValue: (provided) => ({ ...provided, borderRadius: '999px', padding: '0 3px' }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'hsl(0, 0%, 50%)',
      '&:hover': { backgroundColor: 'initial', color: 'black' },
    }),
  };

  return (
    <ReactSelect
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
      name="pois"
      className="hover:border-opacity-40 rounded-lg w-full border-2 border-black border-opacity-20 focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 mt-1"
      {...props}
    />
  );
};

export default Select;
