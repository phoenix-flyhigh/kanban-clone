import KanbanIcon from "./KanbanIcon";

const NavBar = () => {
  return (
    <div className="dark:bg-dark-base h-16 flex justify-between items-center px-4 py-2">
      <div className="md:hidden flex justify-center items-center">
        <KanbanIcon />
      </div>
      <p className="text-lg font-bold dark:text-dark-text-primary ">
        Platform Launch
      </p>
      <button className="rounded-2xl dark:bg-dark-primary bg-light-primary text-dark-text-primary text-md md:py-2 m-0 flex items-center justify-center gap-1 px-4">
        +<span className="hidden md:inline">Add new task</span>
      </button>
    </div>
  );
};

export default NavBar;
