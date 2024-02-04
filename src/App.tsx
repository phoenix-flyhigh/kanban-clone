import { useEffect } from "react";
import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import TaskLayout from "./components/TaskLayout";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  });

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <div className="hidden md:flex">
        <MenuBar />
      </div>
      <div className="w-full flex flex-col overflow-scroll">
        <NavBar />
        <TaskLayout />
      </div>
    </main>
  );
}

export default App;
