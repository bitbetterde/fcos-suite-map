import React from 'react';
import { CheckCircleOutline as CheckIcon } from 'heroicons-react';

interface Props {
  label: string;
  value: boolean;
  name: string;
  required?: boolean;
}

const CheckboxInput: React.FC<Props> = ({ name, label, value, ...inputProps }) => {
  return (
    <label className="flex mb-4 items-center">
      <CheckIcon className={`${value ? 'text-indigo-500' : 'text-gray-400'} mr-2`} />
      <input readOnly type="checkbox" name={name} value={name} className="hidden" checked={value} {...inputProps} />
      {!!label && <span className="form-label">{label}</span>}
    </label>
  );
};

export default CheckboxInput;
