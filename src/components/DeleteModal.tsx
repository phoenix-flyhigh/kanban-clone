import React from "react";

interface DeleteModalProps {
  type: string;
  onSubmit: () => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  type,
  onSubmit,
  onClose,
}: DeleteModalProps) => {
  return (
    <div className="flex flex-col p-4 gap-4 dark:bg-zinc-900 bg-slate-200 rounded-2xl w-96">
      <p className="text-xl font-bold text-red-500 ">Delete {type} ?</p>
      <p className="font-sm dark:text-dark-text-secondary text-light-text-secondary">
        Are you sure you want to delete this {type}? Once deleted, it can be
        reverted
      </p>
      <div className="flex justify-between items-center">
        <button
          onClick={onClose}
          className="flex items-center justify-center rounded-lg text-md font-semibold px-3 py-2 bg-white text-black"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSubmit();
            onClose();
          }}
          className="flex items-center justify-center rounded-lg text-md font-semibold px-3 py-2 bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
