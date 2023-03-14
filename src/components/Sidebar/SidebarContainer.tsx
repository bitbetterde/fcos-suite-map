interface Props {
  className?: string;
  children: React.ReactNode;
}

const SidebarContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <aside
      className={`fcmap-absolute fcmap-right-0 fcmap-m-5 sidebar-height fcmap-min-h-min fcmap-w-[336px] fcmap-shadow-lg fcmap-bg-white fcmap-box-border fcmap-flex fcmap-flex-col ${
        className ?? ''
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarContainer;
