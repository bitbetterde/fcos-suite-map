import { HomeOutline as HomeIcon, LocationMarkerOutline as AddressIcon, X as CloseIcon } from 'heroicons-react';
import React from 'react';
import { useStore } from '../../hooks';
import SidebarContainer from './SidebarContainer';
import Tag from './Tag';

interface Props {}

const SidebarSingleView: React.FC<Props> = () => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);
  const strippedUrl = selectedPoi?.website?.replace(/(^\w+:|^)\/\//, '');

  return (
    <SidebarContainer className={`relative p-0`}>
      <div className={`${selectedPoi?.image ? '' : 'pl-5 pt-5 '}`}>
        <CloseIcon
          size={32}
          className={`${
            selectedPoi?.image ? 'absolute left-5 top-5 ' : ''
          }p-1 text-gray-500 inline-block cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-full`}
          onClick={() => setSelectedPoi(null)}
        />
      </div>
      {selectedPoi?.image && (
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={selectedPoi?.image} alt="blog" />
      )}
      <div className="p-6">
        <h2 className="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
          {selectedPoi?.category}
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{selectedPoi?.name}</h1>
        <p className="leading-relaxed mb-6">{selectedPoi?.description}</p>
        {selectedPoi?.website && (
          <div className={'flex items-center'}>
            <HomeIcon size={18} className={'text-gray-500 mr-2'} />
            <a className={'text-sm text-gray-500 hover:underline'} href={selectedPoi?.website}>
              {strippedUrl}
            </a>
          </div>
        )}
        {selectedPoi?.address && (
          <div className={'flex items-center mt-3'}>
            <AddressIcon size={18} className={'text-gray-500 mr-2'} />
            <div className="text-sm text-gray-500">{selectedPoi?.address}</div>
          </div>
        )}
        {!!selectedPoi?.tags?.length && (
          <div className={'flex items-center mt-3'}>
            {selectedPoi?.tags.map((tag) => (
              <Tag key={tag.id} color={tag.color}>
                {tag.displayName}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </SidebarContainer>
  );
};

export default SidebarSingleView;
