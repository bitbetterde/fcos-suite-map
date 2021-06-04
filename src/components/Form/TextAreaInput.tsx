import React from 'react';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextAreaInput: React.FC<Props> = ({ name, label, value, onChange, ...textAreaProps }) => {
  return (
    <label className="block mb-4">
      {!!label && (
        <span className="form-label">
          {label}
          {textAreaProps?.required && `*`}
        </span>
      )}
      <textarea
        name={name}
        value={value}
        className="form-textarea form-input-custom"
        rows={3}
        onChange={onChange}
        {...textAreaProps}
      ></textarea>
    </label>
  );
};

export default TextAreaInput;
