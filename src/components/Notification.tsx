import { CheckCircleOutline as CheckIcon, X as XIcon, ExclamationOutline as AlertIcon } from 'heroicons-react';
import { useStore } from '../hooks';

const Notification: React.FC = () => {
  const notification = useStore((state) => state.notification);
  const setNotification = useStore((state) => state.setNotification);

  const icon: Record<string, JSX.Element> = {
    alert: <AlertIcon className="fcmap-h-6 fcmap-w-6 fcmap-text-red-600" />,
    success: <CheckIcon className="fcmap-h-6 fcmap-w-6 fcmap-text-green-400" />,
  };
  return (
    notification && (
      <div
        aria-live="assertive"
        className="fcmap-z-10 fcmap-fixed fcmap-inset-0 fcmap-flex fcmap-items-end fcmap-px-4 fcmap-py-6 fcmap-pointer-events-none sm:fcmap-p-6 sm:fcmap-items-start"
      >
        <div className="fcmap-w-full fcmap-flex fcmap-flex-col fcmap-items-center fcmap-space-y-4 sm:fcmap-items-end">
          <div className="fcmap-max-w-sm fcmap-w-full fcmap-bg-white fcmap-shadow-lg fcmap-rounded-lg fcmap-pointer-events-auto fcmap-ring-1 fcmap-ring-black fcmap-ring-opacity-5 fcmap-overflow-hidden">
            <div className="fcmap-p-4">
              <div className="fcmap-flex fcmap-items-start">
                <div className="fcmap-flex-shrink-0">{icon[notification.type]}</div>
                <div className="fcmap-ml-3 fcmap-w-0 fcmap-flex-1 fcmap-pt-0.5">
                  <p className="fcmap-text-sm fcmap-font-medium fcmap-text-gray-900">{notification.title}</p>
                  <p className="fcmap-mt-1 fcmap-text-sm fcmap-text-gray-500">{notification.text}</p>
                </div>

                <div className="fcmap-ml-4 fcmap-flex-shrink-0 fcmap-flex">
                  <button
                    className="fcmap-bg-white fcmap-rounded-md fcmap-inline-flex fcmap-text-gray-400 hover:fcmap-text-gray-500 focus:fcmap-outline-none focus:fcmap-ring-2 focus:fcmap-ring-offset-2 focus:fcmap-ring-indigo-500"
                    onClick={() => setNotification(null)}
                  >
                    <span className="fcmap-sr-only">Close</span>
                    <XIcon className="fcmap-h-5 fcmap-w-5" />
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
