import React, { CSSProperties } from 'react';
import SidebarContainer from './SidebarContainer';
import type { PointOfInterest } from '../types/PointOfInterest';
import { X as CloseIcon, HomeOutline as HomeIcon, LocationMarkerOutline as AddressIcon } from 'heroicons-react';

interface Props {
  style?: CSSProperties;
  value: PointOfInterest;
  onClose?: () => void;
  className?: string;
}

const SidebarSingleView: React.FC<Props> = ({ value, onClose, className, ...restProps }) => {
  const strippedUrl = value?.website?.replace(/(^\w+:|^)\/\//, '');
  return (
    <SidebarContainer className={`relative p-0 ${className || ''}`} {...restProps}>
      <CloseIcon
        size={32}
        className="absolute left-5 top-5 p-1 text-gray-500 inline-block cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-full"
        onClick={onClose}
      />
      <img className="lg:h-48 md:h-36 h-24 w-full object-cover object-center" src={value.image} alt="blog" />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{value.category}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{value.name}</h1>
        <p className="leading-relaxed mb-6">{value.description}</p>
        {value.website && (
          <div className={'flex items-center'}>
            <HomeIcon size={18} className={'text-gray-500 mr-2'} />
            <a className={'text-sm text-gray-500 hover:underline'} href={value.website}>
              {strippedUrl}
            </a>
          </div>
        )}
        {value.address && (
          <div className={'flex items-center mt-3'}>
            <AddressIcon size={18} className={'text-gray-500 mr-2'} />
            <div className="text-sm text-gray-500">{value.address}</div>
          </div>
        )}
      </div>
    </SidebarContainer>
  );
};

export default SidebarSingleView;
