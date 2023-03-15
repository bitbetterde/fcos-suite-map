import {
  HomeOutline as HomeIcon,
  LocationMarkerOutline as AddressIcon,
  UserGroupOutline as RealtionStatusIcon,
} from 'heroicons-react';
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
    <SidebarContainer className={`fcmap-top-0 fcmap-p-0 fcmap-overflow-y-auto md:fcmap-mt-9 md:fcmap-mb-4`}>
      <div className="fcmap-flex fcmap-justify-between fcmap-items-center fcmap-px-4 fcmap-py-6">
        <h1 className="fcmap-text-lg fcmap-font-medium fcmap-font-plex fcmap-text-gray-900">Profil</h1>
        <CloseButton
          onClick={() => {
            history.push('/');
          }}
        />
      </div>
      <div className={`${selectedPoi?.image ? '' : 'fcmap-pl-5 fcmap-pt-5 '}`}></div>
      {selectedPoi?.image && (
        <img
          className="fcmap-h-40 fcmap-w-full fcmap-object-cover fcmap-object-center"
          src={selectedPoi?.image}
          alt={selectedPoi?.name}
        />
      )}
      <div className="fcmap-px-4 fcmap-pt-6 fcmap-pb-5">
        <h1 className="fcmap-font-karla fcmap-text-xl fcmap-leading-6 fcmap-font-bold fcmap-text-gray-900">
          {selectedPoi?.name}
        </h1>
        <h2 className="fcmap-text-sm fcmap-font-plex fcmap-font-normal fcmap-text-gray-500">{selectedPoi?.category}</h2>
      </div>
      <div className="fcmap-px-7 fcmap-pb-14 fcmap-font-plex">
        <h3 className="fcmap-text-sm fcmap-font-medium fcmap-text-gray-500 fcmap-mb-1">Info</h3>
        <p className="fcmap-leading-relaxed fcmap-mb-8">{selectedPoi?.description}</p>
        {selectedPoi?.address && (
          <div className={'fcmap-flex-col fcmap-items-center fcmap-mb-8'}>
            <h3 className="fcmap-text-sm fcmap-font-medium fcmap-text-gray-500 fcmap-mb-1">Location</h3>
            <div className="fcmap-text-sm fcmap-font-normal fcmap-text-gray-900">{selectedPoi?.address}</div>
          </div>
        )}
        {selectedPoi?.website && (
          <div className={'fcmap-flex-col fcmap-items-center fcmap-mb-8'}>
            <h3 className="fcmap-text-sm fcmap-font-medium fcmap-text-gray-500 fcmap-mb-1">Website</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={'fcmap-text-sm fcmap-font-normal  fcmap-text-gray-900 hover:fcmap-underline'}
              href={selectedPoi?.website}
            >
              {strippedUrl}
            </a>
          </div>
        )}
        {!!selectedPoi?.tags?.length && (
          <div className={'fcmap-flex fcmap-items-center fcmap-mt-3 fcmap-flex-wrap'}>
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
