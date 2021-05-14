import React from 'react';
import { CheckCircleOutline as CheckIcon } from 'heroicons-react';

interface Props {
  label: string;
  value: [number | '', number | ''];
  required?: boolean;
  text?: string;
}

const CoordinateInput: React.FC<Props> = ({ label, text, value, required }) => {
  return (
    <>
      {!!label && (
        <span className="form-label">
          {label}
          {required && `*`}
        </span>
      )}
      <label className="flex mt-1 mb-4 p-2 items-center w-full rounded-lg border-2 border-black border-opacity-20 hover:border-opacity-40 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <CheckIcon className={`${Boolean(value.filter(Boolean).length) ? 'text-indigo-500' : 'text-gray-400'} mr-2`} />
        <input readOnly type="text" name={'lat'} value={value[0]} className="hidden" required={required}></input>
        <input readOnly type="text" name={'lng'} value={value[1]} className="hidden" required={required}></input>
        {!!text && <span className="form-label">{text}</span>}
      </label>
    </>
  );
};

export default CoordinateInput;
