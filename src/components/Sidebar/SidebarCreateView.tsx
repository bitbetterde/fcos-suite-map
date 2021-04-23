import { X as CloseIcon } from 'heroicons-react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import AddPoiForm from './AddPoiForm';
import SidebarContainer from './SidebarContainer';

interface Props {}

const SidebarCreateView: React.FC<Props> = () => {
  const history = useHistory();
  return (
    <SidebarContainer className="p-5">
      <CloseIcon
        size={32}
        className={`left-5 top-5 p-1 text-gray-500 inline-block cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-full`}
        onClick={() => history.push('/')}
      />
      <h1 className="text-xl font-medium title-font text-gray-900 my-2">Ort anlegen:</h1>
      <AddPoiForm />
    </SidebarContainer>
  );
};

export default SidebarCreateView;
