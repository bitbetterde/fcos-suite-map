import React, { MutableRefObject } from 'react';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  ref?: MutableRefObject<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({ name, label, value, onChange, ref, type = 'text', ...inputProps }) => {
  return (
    <label className="block mb-4">
      {!!label && (
        <span className="form-label">
          {label}
          {inputProps?.required && `*`}
        </span>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        className="form-input"
        onChange={onChange}
        {...inputProps}
      />
    </label>
  );
};

export default TextInput;
