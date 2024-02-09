import React from "react";
import { DropdownType } from "../Interfaces";

interface DropdownProps {
  type: DropdownType;
  onEdit?: () => void;
  onDelete: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  type,
  onEdit,
  onDelete,
}: DropdownProps) => {
  return (
    <div className="absolute min-w-28 top-16 right-12 flex flex-col gap-2 rounded-lg py-3 px-4 dark:bg-zinc-900 bg-slate-200">
      {type === DropdownType.BOARD && (
        <button
          onClick={onEdit}
          className="text-md font-semibold dark:text-dark-text-primary text-light-text-primary"
        >
          Edit board
        </button>
      )}
      <button onClick={onDelete} className="text-md font-semibold text-red-500">
        Delete {type}
      </button>
    </div>
  );
};

export default Dropdown;
