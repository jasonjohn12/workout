import { WorkoutsContext } from "../components/context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context)
    throw Error("WorkoutsContext must be used inside WorkoutsContextProvider");
  return context;
};
