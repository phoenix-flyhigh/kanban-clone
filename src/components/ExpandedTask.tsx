import { Task } from "../Interfaces";

interface ExpandedTaskProps {
  task: Task;
  onClose: () => void;
}

const ExpandedTask: React.FC<ExpandedTaskProps> = ({
  task,
  onClose,
}: ExpandedTaskProps) => {
  const { title, description, subTasks, status } = task;

  return (
    <div className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      <p className="text-sm dark:text-dark-text-secondary text-light-text-secondary">
        {description}
      </p>
      <div className="flex flex-col gap-2 w-full py-1 px-4 dark:bg-dark-secondary bg-light-secondary">
        {subTasks.map(({ title, completed }) => (
          <div className="flex gap-4 w-full" key={title}>
            <input
              type="checkbox"
              id="subTask"
              name="subTask"
              checked={completed}
            />
            <label htmlFor="subtask">{title}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={status}
          className="dark:bg-dark-base bg-light-base py-1 px-3 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        >
          <option>TODO</option>
          <option>DOING</option>
          <option>DONE</option>
        </select>
      </div>
    </div>
  );
};

export default ExpandedTask;
