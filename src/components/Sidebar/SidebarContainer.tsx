interface Props {
  className?: string;
  children: React.ReactNode;
  clickable?: boolean;
}

const SidebarContainer: React.FC<Props> = ({ className, children, clickable = true }) => {
  return (
    <aside
      className={`fcmap-w-full md:fcmap-w-[336px] fcmap-h-auto fcmap-overflow-y-hidden fcmap-z-10 fcmap-shadow-lg ${
        clickable ? 'fcmap-pointer-events-auto' : 'fcmap-pointer-events-none'
      } ${className ?? ''}`}
    >
      <div
        className={`fcmap-w-full fcmap-max-h-full md:sidebar-height fcmap-min-h-min fcmap-bg-white fcmap-box-border fcmap-flex fcmap-flex-col`}
      >
        {children}
      </div>
    </aside>
  );
};

export default SidebarContainer;
