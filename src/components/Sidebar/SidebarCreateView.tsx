import { X as CloseIcon } from 'heroicons-react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import AddPoiForm from '../Form/AddPoiForm';
import SidebarContainer from './SidebarContainer';

const SidebarCreateView: React.FC = () => {
  const history = useHistory();
  return (
    <SidebarContainer className="p-5">
      <CloseIcon
        size={32}
        className={`flex-shrink-0 left-5 top-5 p-1 text-gray-500 inline-block cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-full`}
        onClick={() => history.push('/')}
      />
      <h1 className="text-xl font-medium title-font text-gray-900 mt-2 mb-4">Neuen Ort anlegen:</h1>
      <AddPoiForm />
    </SidebarContainer>
  );
};

export default SidebarCreateView;
