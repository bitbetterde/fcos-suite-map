import ReactSelect, { components } from 'react-select';
import type { Theme } from 'react-select';
import { Search as SearchIcon, OfficeBuilding as BuildingIcon, X as CloseIcon } from 'heroicons-react';
import { Pill } from '@fchh/fcos-suite-ui';
import { useStore, useFilteredPoiData } from '../hooks';

interface SelectOption {
  label: string;
  value: string;
}

const CustomOption = ({ children, data, ...rest }: any) => {
  return (
    <components.Option {...rest}>
      <Pill
        size="lg"
        title={children}
        rounded
        className="fcmap-text-indigo-800"
        customBgColor={data.color || 'hsl(229,60%,80%)'}
      />
    </components.Option>
  );
};

const CustomControl = ({ children, ...props }: any) => {
  return (
    <components.Control {...props}>
      <SearchIcon className="fcmap-w-5 fcmap-h-5" />
      {children}
      <BuildingIcon className="fcmap-w-4 fcmap-h-4" />
    </components.Control>
  );
};

const CustomMultiValue = ({ children, data, getValue, setValue, ...rest }: any) => {
  return (
    <components.MultiValueContainer {...rest}>
      <Pill
        size="sm"
        title={children}
        rounded
        className="fcmap-mr-0.5 fcmap-text-indigo-800"
        icon={
          <CloseIcon className="fcmap-w-3 fcmap-h-3 fcmap-text-indigo-400 hover:fcmap-text-gray-800 fcmap-cursor-pointer" />
        }
        iconRight
        onIconClick={() => {
          const oldValue = getValue();
          // @ts-expect-error Not documented
          const newValue = oldValue.filter((item) => !(data.value.id === item.value.id));
          setValue(newValue);
        }}
        customBgColor={data.color || 'hsl(229,60%,80%)'}
      />
    </components.MultiValueContainer>
  );
};

const FilterSelect = (): JSX.Element => {
  const { filterTags, setFilterTags } = useFilteredPoiData();
  const tagColorMapping = useStore((state) => state.tagColorMapping);

  const tagsToSelectOptions = (tags?: string[] | null): SelectOption[] =>
    tags?.map((tag) => ({ label: tag, value: tag, color: tagColorMapping?.[tag] || 'hsl(229,60%,80%)' })) || [];

  const poiData = useStore((state) => state.poiData);

  const uniqueTags = new Set(poiData?.flatMap((poi) => poi.tags));

  const options = tagsToSelectOptions([...uniqueTags]);

  return (
    <ReactSelect
      isMulti
      theme={(theme): Theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#C7D2FE',
        },
      })}
      classNames={{
        control: (provided) => provided && '!fcmap-border-0 !fcmap-text-gray-400 !fcmap-w-full !fcmap-px-4',
        indicatorSeparator: (provided) => provided && 'fcmap-hidden',
        indicatorsContainer: (provided) => provided && '!fcmap-hidden',
        multiValue: ({ isMulti }) => (isMulti ? '' : ''),
      }}
      components={{
        Option: CustomOption,
        Control: CustomControl,
        MultiValue: CustomMultiValue,
      }}
      placeholder={'Filter'}
      name="pois"
      className="fcmap-w-full fcmap-z-20 fcmap-order-1 md:fcmap-order-2 md:fcmap-w-[336px] fcmap-shadow-lg fcmap-bg-white fcmap-flex fcmap-justify-between fcmap-items-center fcmap-pointer-events-auto fcmap-shrink-0"
      options={options}
      value={tagsToSelectOptions(filterTags)}
      //@ts-expect-error Not documented
      onChange={(selectedOptions: SelectOption[]) => {
        setFilterTags(selectedOptions.map((opt) => opt.value));
      }}
    />
  );
};

export default FilterSelect;
