import { useEffect } from "react";
import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import TaskLayout from "./components/TaskLayout";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  });

  return (
    <main className="flex h-screen w-screen">
      <MenuBar />
      <div className="w-full">
        <NavBar />
        <TaskLayout />
      </div>
    </main>
  );
}

export default App;
