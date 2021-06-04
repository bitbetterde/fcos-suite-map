import React from 'react';
import type { NamedProps } from 'react-select';
import CreatableSelect from '../CreatableSelect';

interface Props<OptionType, isMulti extends boolean> extends NamedProps<OptionType, isMulti> {
  label: string;
  name: string;
  required?: boolean;
}

const SelectInput = <OptionType, isMulti extends boolean>({
  name,
  label,
  value,
  onChange,
  ...inputProps
}: Props<OptionType, isMulti>): JSX.Element => {
  return (
    <label className="block mb-4">
      {!!label && (
        <span className="form-label">
          {label}
          {inputProps?.required && `*`}
        </span>
      )}
      <CreatableSelect
        name={name}
        value={value}
        className="p-0 form-input form-input-custom"
        onChange={onChange}
        {...inputProps}
      />
    </label>
  );
};

export default SelectInput;
