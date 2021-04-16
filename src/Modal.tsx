import React from 'react';

interface Props {
  title: string;
  text: string;
  icon?: JSX.Element;
}

const Modal: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div role="dialog" aria-modal="true" className="fixed z-10 inset-0 flex flex-column items-center justify-center">
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50" aria-hidden="true"></div>
      <div className="inline-block z-10 bg-white rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white p-4 sm:p-6">
          <div className="sm:flex sm:items-start">
            {icon && (
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                {icon}
              </div>
            )}
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
