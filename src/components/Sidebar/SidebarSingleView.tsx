import {
  HomeOutline as HomeIcon,
  LocationMarkerOutline as AddressIcon,
  UserGroupOutline as RealtionStatusIcon,
} from 'heroicons-react';
import React from 'react';
import { useStore } from '../../hooks';
import SidebarContainer from './SidebarContainer';
import Tag from '../Tag';
import CloseButton from './CloseButton';
import { useHistory } from 'react-router-dom';

const SidebarSingleView: React.FC = () => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const strippedUrl = selectedPoi?.website?.replace(/(^\w+:|^)\/\//, '');
  const history = useHistory();

  return (
    <SidebarContainer className={`relative p-0`}>
      <div className={`${selectedPoi?.image ? '' : 'pl-5 pt-5 '}`}>
        <CloseButton
          absolute
          onClick={() => {
            history.push('/');
          }}
        />
      </div>
      {selectedPoi?.image && (
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={selectedPoi?.image}
          alt={selectedPoi?.name}
        />
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={'text-sm text-gray-500 hover:underline'}
              href={selectedPoi?.website}
            >
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
        {selectedPoi?.relationStatus && (
          <div className={'flex items-center mt-3'}>
            <RealtionStatusIcon size={18} className={'text-gray-500 mr-2'} />
            <div className="text-sm text-gray-500">{selectedPoi?.relationStatus}</div>
          </div>
        )}
        {!!selectedPoi?.tags?.length && (
          <div className={'flex items-center mt-3 flex-wrap'}>
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
