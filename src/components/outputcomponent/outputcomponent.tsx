import JSZip from "jszip";
import { FC, ReactElement, useContext } from "react";
import { TasksContext } from "../../contexts/taskscontext";
import Task from "../../lib/task";
import { TasksListItem } from "./taskslistitem";

export const OutputComponent: FC = () => {
	const { tasks } = useContext(TasksContext);

	const tasksListItems: ReactElement[] = [];

	tasks.forEach((task: Task, index: number) => {
		tasksListItems.push(<TasksListItem {...task} key={index} />);
	});

	return (
		<output>
			<ul>{tasksListItems}</ul>

			{/** @Todo Add something here later */}
		</output>
	);
};
