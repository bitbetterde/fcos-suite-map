interface Props {
  className?: string;
  children: React.ReactNode
}

const SidebarContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <aside
      className={`sidebar fcmap-box-border fcmap-flex fcmap-flex-col fcmap-border-t-2 md:fcmap-border-r md:fcmap-border-t-0 fcmap-border-grey-900 ${
        className ?? ''
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarContainer;
