import React, { ReactNode } from "react";

interface ColumnProps {
  title?: string;
  titleColor?: string;
  taskCount?: number;
  newColumn?: boolean;
  children?: ReactNode;
}

const Column: React.FC<ColumnProps> = ({
  title,
  titleColor,
  taskCount,
  newColumn,
  children,
}: ColumnProps) => {
  return (
    <div className="flex flex-col justify-start min-w-72 max-w-80 h-full">
      <div className="flex items-center justify-start gap-3 p-4">
        <div className={` w-3 h-3 ${titleColor} rounded-full`} />
        <p className="dark:text-dark-text-secondary text-light-text-primary text-sm font-bold tracking-widest">
          {title}
        </p>
        {taskCount && (
          <p className="dark:text-dark-text-secondary text-sm">({taskCount})</p>
        )}
      </div>
      {newColumn ? (
        <div
          className={`flex flex-col dark:bg-zinc-600 bg-slate-400 rounded-lg opacity-20 h-full justify-center items-center`}
        >
          <button className="dark:text-dark-text-primary text-light-text-primary text-xl font-semibold">
            + New Column
          </button>
        </div>
      ) : (
        <div
          className={`flex flex-col gap-2 md:gap-4 h-full overflow-auto scroll-smooth`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Column;
