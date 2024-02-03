const KanbanIcon = () => {
  return (
    <div className="flex gap-1 justify-center items-center">
      <div className="dark:bg-dark-primary bg-light-primary opacity-100 h-6 rounded-md w-[6px]"></div>
      <div className="dark:bg-dark-primary bg-light-primary opacity-70 h-6 rounded-md w-[6px]"></div>
      <div className="dark:bg-dark-primary bg-light-primary opacity-40 h-6 rounded-md w-[6px]"></div>
    </div>
  );
};

export default KanbanIcon;
