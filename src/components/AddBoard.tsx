import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface AddBoardProps {
  onSubmit: (boardTitle: string) => void;
  onClose: () => void;
}

const AddBoard: React.FC<AddBoardProps> = ({
  onSubmit,
  onClose,
}: AddBoardProps) => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const boards = useSelector((state: RootState) => state.boards);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (boards.includes(title.trim())) {
      setError(true);
    } else {
      onSubmit(title);
      onClose();
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Add New Board</h1>
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
          onChange={(e) => {
            error && setError(false);
            setTitle(e.target.value);
          }}
          placeholder="e.g Take coffee break"
          className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        />
        {error && <p className="text-sm text-red-500">Board already exists</p>}
      </div>
      <button
        type="submit"
        disabled={title === ""}
        className={`dark:bg-dark-primary bg-light-primary dark:text-dark-text-primary text-light-secondary text-md font-semibold w-full rounded-full p-3 disabled:opacity-30`}
      >
        Create board
      </button>
    </form>
  );
};

export default AddBoard;
