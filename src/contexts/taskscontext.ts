/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { Context, createContext } from "react";
import Task from "../lib/task";

export type TasksContextProps = {
	tasks: Task[];
};

export const TasksContext: Context<TasksContextProps> = createContext<TasksContextProps>({
	tasks: []
});
