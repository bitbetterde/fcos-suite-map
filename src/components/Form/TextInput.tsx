import React from 'react';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

const TextInput: React.FC<Props> = ({ name, label, value, onChange, type = 'text', ...inputProps }) => {
  return (
    <label className="block mb-4">
      {!!label && (
        <span className="form-label">
          {label}
          {inputProps?.required && `*`}
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        className="form-input form-input-custom"
        onChange={onChange}
        {...inputProps}
      />
    </label>
  );
};

export default TextInput;
