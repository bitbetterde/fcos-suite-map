import React from 'react';
import type { PointOfInterest } from 'src/types/PointOfInterest';

interface Props {
  value: PointOfInterest;
}

const SidebarListElement: React.FC<Props> = ({ value, ...restProps }) => {
  return (
    value && (
      <div
        {...restProps}
        className="border-2 border-black border-opacity-20 hover:border-opacity-40 cursor-pointer rounded-lg overflow-hidden mb-3"
      >
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{value.category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{value.name}</h1>
          <p className="leading-relaxed">{value.description}</p>
        </div>
      </div>
    )
  );
};

export default SidebarListElement;
