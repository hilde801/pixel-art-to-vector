/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

/* import { FC, ReactElement } from "react";
import Task from "../../lib/task";

import TasksListItemStyles from "./taskslistitem.module.css";

export const TasksListItem: FC<Task> = (props: Task) => {
	const errorsChildren = (): ReactElement[] =>
		props.errors!.map((error: string, index: number) => {
			return <li key={index}>{error}</li>;
		});

	return (
		<li className={TasksListItemStyles.tasksListItem}>
			<p className={TasksListItemStyles.filename}>{`${props.originalFilename}.svg`}</p>
			{props.errors && <ul className={TasksListItemStyles.errorsList}>{errorsChildren()}</ul>}
		</li>
	);
}; */

export const TasksListItem: React.FC = () => {
	return <p>TODO</p>;
};
