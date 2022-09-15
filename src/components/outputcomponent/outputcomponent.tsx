import JSZip from "jszip";
import { FC, ReactElement, useContext } from "react";
import { TasksContext } from "../../contexts/taskscontext";
import Task from "../../lib/task";
import { TasksListItem } from "./taskslistitem";

export const OutputComponent: FC = () => {
	const { tasks } = useContext(TasksContext);

	const getTasksListItems = (): ReactElement[] =>
		tasks.map((task: Task, index: number) => {
			return <TasksListItem {...task} key={index} />;
		});

	return (
		<output>
			<ul>{getTasksListItems()}</ul>

			{/** @Todo Add something here later */}
		</output>
	);
};
