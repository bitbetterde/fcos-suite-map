import React from 'react';
import { PaperClipOutline as PaperClipIcon, UploadOutline as UploadIcon } from 'heroicons-react';

interface Props {
  label: string;
  value: File | null;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const FileInput: React.FC<Props> = ({ name, label, value, onChange, ...inputProps }) => {
  return (
    <>
      <span className="form-label">
        {label}
        {inputProps?.required && `*`}
      </span>
      <label
        className={`mt-1 flex items-center rounded-lg border-2 border-black mb-6 w-full p-2 text-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer${
          value
            ? ' bg-white text-black border-opacity-20 hover:border-opacity-40 truncate text-sm text-opacity-40'
            : ' bg-indigo-500 text-white border-opacity-0 hover:bg-indigo-600 text-md'
        }`}
      >
        {value ? (
          <>
            <PaperClipIcon size={18} className="flex-shrink-0 mr-2" />
            {value.name}
          </>
        ) : (
          <>
            <UploadIcon size={18} className="flex-shrink-0 mr-2" />
            {'Datei auswählen...'}
          </>
        )}
        <input
          className="hidden"
          type="file"
          name={name}
          accept="image/png, image/jpeg"
          onChange={onChange}
          {...inputProps}
        />
      </label>
    </>
  );
};

export default FileInput;
