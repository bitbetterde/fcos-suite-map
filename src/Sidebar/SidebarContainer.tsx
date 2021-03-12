import React, { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  className?: string;
}

const SidebarContainer: React.FC<Props> = ({ style, className, children }) => {
  return (
    <div
      style={style}
      className={`flex flex-col shadow-2xl border-r-2 border-black border-opacity-20 ${className ?? ''}`}
    >
      {children}
    </div>
  );
};

export default SidebarContainer;
