
interface Props {
  title: string;
  text: string;
  icon?: JSX.Element;
}

const Modal: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div role="dialog" aria-modal="true" className="fcmap-fixed fcmap-z-10 fcmap-inset-0 fcmap-flex fcmap-flex-column fcmap-items-center fcmap-justify-center">
      <div className="fcmap-fixed fcmap-inset-0 fcmap-bg-gray-400 fcmap-bg-opacity-50" aria-hidden="true"></div>
      <div className="fcmap-inline-block fcmap-z-10 fcmap-bg-white fcmap-rounded-lg fcmap-text-left fcmap-overflow-hidden fcmap-shadow-xl sm:fcmap-my-8 sm:fcmap-align-middle sm:fcmap-max-w-lg sm:fcmap-w-full">
        <div className="fcmap-bg-white fcmap-p-4 sm:fcmap-p-6">
          <div className="sm:fcmap-flex sm:fcmap-items-start">
            {icon && (
              <div className="fcmap-mx-auto fcmap-flex-shrink-0 fcmap-flex fcmap-items-center fcmap-justify-center fcmap-h-12 fcmap-w-12 fcmap-rounded-full fcmap-bg-red-100 sm:fcmap-mx-0 sm:fcmap-h-10 sm:fcmap-w-10">
                {icon}
              </div>
            )}
            <div className="fcmap-mt-3 fcmap-text-center sm:fcmap-mt-0 sm:fcmap-ml-4 sm:fcmap-text-left">
              <h3 className="fcmap-text-lg fcmap-leading-6 fcmap-font-medium fcmap-text-gray-900" id="modal-title">
                {title}
              </h3>
              <div className="fcmap-mt-2">
                <p className="fcmap-text-sm fcmap-text-gray-500">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
