import { Context, createContext } from "react";
import Task from "../lib/task";

export type TasksContextProps = {
	tasks: Task[];
};

export type TasksContext = Context<TasksContextProps>;

export const tasksContext: TasksContext = createContext<TasksContextProps>({
	tasks: []
});
