import type { Theme } from 'react-select';
import type { Props, StylesConfig } from 'react-select';
import Creatable from 'react-select/creatable';

const CreatableSelect = <OptionType, isMulti extends boolean>(props: Props<OptionType, isMulti>): JSX.Element => {
  const customStyles: StylesConfig<OptionType, isMulti> = {
    control: (provided) => ({
      ...provided,
      border: '0',
      borderRadius: '0.5em',
      boxShadow: 'none',
    }),
    multiValue: (provided) => ({ ...provided, borderRadius: '999px', padding: '0 3px' }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'hsl(0, 0%, 50%)',
      '&:hover': { backgroundColor: 'initial', color: 'black' },
    }),
  };

  return (
    <div>
      <Creatable
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
        className="hover:fcmap-border-opacity-40 fcmap-rounded-lg fcmap-w-full fcmap-border-2 fcmap-border-black fcmap-border-opacity-20 focus-within:fcmap-border-indigo-300 focus-within:fcmap-ring focus-within:fcmap-ring-indigo-200 focus-within:fcmap-ring-opacity-50 fcmap-mt-1"
        {...props}
      />
    </div>
  );
};

export default CreatableSelect;
