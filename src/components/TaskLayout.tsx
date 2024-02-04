import Column from "./Column";

const TaskLayout = () => {
  return (
    <div className="dark:bg-dark-secondary bg-light-secondary h-full flex gap-4 p-4 overflow-y-hidden overflow-x-scroll">
      <Column title="TODO" titleColor="bg-cyan-400" />
      <Column title="TODO" titleColor="bg-emerald-400">
        <button className="flex flex-col dark:bg-dark-base bg-light-base rounded-lg w-full py-4 px-2">
          <p className="dark:text-dark-text-primary text-light-text-primary font-semibold text-md">
            Build UI for search
          </p>
          <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm">
            0 of 1 subtasks
          </p>
        </button>
        <button className="flex flex-col dark:bg-dark-base bg-light-base rounded-lg w-full py-4 px-2">
          <p className="dark:text-dark-text-primary text-light-text-primary font-semibold text-md">
            Build UI for search
          </p>
          <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm">
            0 of 1 subtasks
          </p>
        </button>
      </Column>
      <Column title="TODO" titleColor="bg-indigo-400" />
      <Column newColumn />
    </div>
  );
};

export default TaskLayout;
