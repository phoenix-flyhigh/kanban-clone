import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../redux/ColumnSlice";

interface ExpandedTaskProps {
  onClose: () => void;
}

const AddColumn: React.FC<ExpandedTaskProps> = ({
  onClose,
}: ExpandedTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addColumn(title.toUpperCase()));
    onClose();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Add New Column</h1>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g Take coffee break"
          className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        />
      </div>
      <button
        type="submit"
        disabled={title === ""}
        className={`dark:bg-dark-primary bg-light-primary dark:text-dark-text-primary text-light-secondary text-md font-semibold w-full rounded-full p-3 disabled:opacity-30`}
      >
        Create Column
      </button>
    </form>
  );
};

export default AddColumn;
