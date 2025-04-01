import { useFilteredPoiData, useStore } from '../../hooks';
import CloseButton from './CloseButton';
import MinimizeButton from './MinimizeButton';
import { useHistory } from 'react-router-dom';
import { Pill } from '@fchh/fcos-suite-ui';
import SidebarHeader from './SidebarHeader';

const SidebarSingleView: React.FC = () => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);
  const tagColorMapping = useStore((state) => state.tagColorMapping);
  const strippedUrl = selectedPoi?.website?.replace(/(^\w+:|^)\/\//, '');
  const history = useHistory();
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);
  const setIsSidebarHidden = useStore((state) => state.setIsSidebarHidden);
  const { setFilterTags } = useFilteredPoiData();
  

  return (
    <>
      <SidebarHeader>
        <h1 className="fcmap-text-lg fcmap-font-medium fcmap-font-plex fcmap-text-gray-900">Profil</h1>
        <div className="fcmap-flex">
          <MinimizeButton
            isMinimized={isSidebarHidden}
            onClick={() => {
              setIsSidebarHidden(!isSidebarHidden);
            }}
          />
          <CloseButton
            onClick={() => {
              history.push('/');
            }}
          />
        </div>
      </SidebarHeader>
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
      <div className="fcmap-px-7 fcmap-pb-14 fcmap-font-plex fcmap-overflow-y-auto">
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
              className={'fcmap-text-sm fcmap-font-normal fcmap-text-gray-900 hover:fcmap-underline'}
              href={selectedPoi?.website}
            >
              {strippedUrl}
            </a>
          </div>
        )}
        {!!selectedPoi?.tags?.length && (
          <div className={'fcmap-flex fcmap-items-center fcmap-mt-3 fcmap-flex-wrap'}>
            {selectedPoi?.tags?.map((tag, i) => (
              <Pill
                key={'tag' + i}
                size="lg"
                title={tag}
                customBgColor={tagColorMapping?.[tag] || 'hsl(229,60%,80%)'}
                rounded
                className="fcmap-text-indigo-800 fcmap-px-2 fcmap-py-0.5 fcmap-m-0.5 fcmap-mr-1.5"
                onClick={() => {
                  setFilterTags([tag]);
                  setSelectedPoi(null);
                  history.push('/');
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarSingleView;
