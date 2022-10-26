interface Props {
  className?: string;
  children: React.ReactNode
}

const SidebarContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <aside
      className={`sidebar box-border flex flex-col border-t-2 md:border-r-2 md:border-t-0 border-black border-opacity-20 ${
        className ?? ''
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarContainer;
