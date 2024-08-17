"use client";

import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { useGlobalState } from "./context/globalProvider";
import Tasks from "./components/Tasks/Tasks";

export default function Home() {
  const { tasks } = useGlobalState();

  return (
    <>
    
      <Tasks title="All Tasks" tasks={tasks} />
    </>
  );
}
