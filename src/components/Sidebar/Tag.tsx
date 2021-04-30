import React from 'react';

interface Props {
  children: string | JSX.Element;
  color?: string;
}

const Tag: React.FC<Props> = ({ children, color }) => {
  return (
    <span
      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2"
      style={color ? { backgroundColor: color } : {}}
    >
      {children}
    </span>
  );
};

export default Tag;
