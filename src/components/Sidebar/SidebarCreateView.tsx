import React from 'react';
import { useHistory } from 'react-router-dom';
import AddPoiForm from '../Form/AddPoiForm';
import CloseButton from './CloseButton';
import SidebarContainer from './SidebarContainer';

const SidebarCreateView: React.FC = () => {
  const history = useHistory();
  return (
    <SidebarContainer className="p-5">
      <CloseButton onClick={() => history.push('/')} />
      <h1 className="text-xl font-medium title-font text-gray-900 mt-2 mb-4">Neuen Ort anlegen:</h1>
      <AddPoiForm />
    </SidebarContainer>
  );
};

export default SidebarCreateView;
