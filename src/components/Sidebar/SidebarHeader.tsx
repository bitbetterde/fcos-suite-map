interface SidebarHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ className, children }) => {
  return (
    <div
      className={
        'fcmap-flex fcmap-justify-between fcmap-m-4 fcmap-mb-0 fcmap-pb-2 fcmap-gap-2 fcmap-pointer-events-auto' +
        className
      }
    >
      {children}
    </div>
  );
};

export default SidebarHeader;
