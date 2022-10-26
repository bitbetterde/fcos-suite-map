import { ExclamationOutline as AlertIcon } from 'heroicons-react';
import { useStore } from '../hooks';
import Modal from './Modal';

const ErrorModal: React.FC = () => {
  const error = useStore((state) => state.error);
  const icons: { [index: string]: JSX.Element } = {
    alert: <AlertIcon className="h-6 w-6 text-red-600" />,
  };
  return error && <Modal title={error.title} text={error.message} icon={icons[error.icon]} />;
};

export default ErrorModal;
