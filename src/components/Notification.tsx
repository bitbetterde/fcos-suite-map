import { CheckCircleOutline as CheckIcon, X as XIcon, ExclamationOutline as AlertIcon } from 'heroicons-react';
import { useStore } from '../hooks';

const Notification: React.FC = () => {
  const notification = useStore((state) => state.notification);
  const setNotification = useStore((state) => state.setNotification);

  const icon: Record<string, JSX.Element> = {
    alert: <AlertIcon className="h-6 w-6 text-red-600" />,
    success: <CheckIcon className="h-6 w-6 text-green-400" />,
  };
  return (
    notification && (
      <div
        aria-live="assertive"
        className="z-10 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">{icon[notification.type]}</div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{notification.text}</p>
                </div>

                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setNotification(null)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
