interface SidebarContainerProps {
  className?: string;
  children: React.ReactNode;
  clickable?: boolean;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ className, children, clickable = true }) => {
  return (
    <aside
      className={`fcmap-w-full md:fcmap-w-[336px] fcmap-h-full fcmap-overflow-y-auto fcmap-z-10  ${
        clickable ? 'fcmap-pointer-events-auto' : 'fcmap-pointer-events-none'
      } ${className ?? ''}`}
    >
      <div
        className={`fcmap-shadow-lg fcmap-w-full fcmap-max-h-full md:sidebar-height fcmap-min-h-min fcmap-bg-white fcmap-box-border fcmap-flex fcmap-flex-col`}
      >
        {children}
      </div>
    </aside>
  );
};

export default SidebarContainer;
