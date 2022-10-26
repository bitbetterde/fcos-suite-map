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
    <SidebarContainer className={`fcmap-relative fcmap-p-0`}>
      <div className={`${selectedPoi?.image ? '' : 'fcmap-pl-5 fcmap-pt-5 '}`}>
        <CloseButton
          absolute
          onClick={() => {
            history.push('/');
          }}
        />
      </div>
      {selectedPoi?.image && (
        <img
          className="lg:fcmap-h-48 md:fcmap-h-36 fcmap-w-full fcmap-object-cover fcmap-object-center"
          src={selectedPoi?.image}
          alt={selectedPoi?.name}
        />
      )}
      <div className="fcmap-p-6">
        <h2 className="fcmap-tracking-widest fcmap-uppercase fcmap-text-xs fcmap-title-font fcmap-font-medium fcmap-text-gray-400 fcmap-mb-1">
          {selectedPoi?.category}
        </h2>
        <h1 className="fcmap-title-font fcmap-text-lg fcmap-font-medium fcmap-text-gray-900 fcmap-mb-3">{selectedPoi?.name}</h1>
        <p className="fcmap-leading-relaxed fcmap-mb-6">{selectedPoi?.description}</p>
        {selectedPoi?.website && (
          <div className={'fcmap-flex fcmap-items-center'}>
            <HomeIcon size={18} className={'fcmap-text-gray-500 fcmap-mr-2'} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={'fcmap-text-sm fcmap-text-gray-500 hover:fcmap-underline'}
              href={selectedPoi?.website}
            >
              {strippedUrl}
            </a>
          </div>
        )}
        {selectedPoi?.address && (
          <div className={'fcmap-flex fcmap-items-center fcmap-mt-3'}>
            <AddressIcon size={18} className={'fcmap-text-gray-500 fcmap-mr-2'} />
            <div className="fcmap-text-sm fcmap-text-gray-500">{selectedPoi?.address}</div>
          </div>
        )}
        {selectedPoi?.relationStatus && (
          <div className={'fcmap-flex fcmap-items-center fcmap-mt-3'}>
            <RealtionStatusIcon size={18} className={'fcmap-text-gray-500 fcmap-mr-2'} />
            <div className="fcmap-text-sm fcmap-text-gray-500">{selectedPoi?.relationStatus}</div>
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
