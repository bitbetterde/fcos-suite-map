import React, { CSSProperties } from 'react';
import SidebarContainer from './SidebarContainer';
import type { PointOfInterest } from '../types/PointOfInterest';
import { X as CloseIcon } from 'heroicons-react';

interface Props {
  style?: CSSProperties;
  value: PointOfInterest;
  onClose?: () => void;
}

const SidebarSingleView: React.FC<Props> = ({ value, onClose, ...restProps }) => {
  return (
    <SidebarContainer {...restProps}>
      <CloseIcon className="inline-block cursor-pointer hover:bg-gray-200 rounded-full" onClick={onClose} />

      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{value.category}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{value.name}</h1>
        <p className="leading-relaxed mb-3">{value.description}</p>
      </div>
    </SidebarContainer>
  );
};

export default SidebarSingleView;
