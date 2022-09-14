import { Context, createContext } from "react";
import Task from "../lib/task";

export type TasksContextProps = {
	tasks: Task[];
};

export const TasksContext: Context<TasksContextProps> = createContext<TasksContextProps>({
	tasks: []
});
