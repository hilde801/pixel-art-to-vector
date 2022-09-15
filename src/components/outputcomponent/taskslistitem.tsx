/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { FC, ReactElement } from "react";
import Task from "../../lib/task";

export const TasksListItem: FC<Task> = (props: Task) => {
	const errorsChildren = (): ReactElement[] =>
		props.errors!.map((error: string, index: number) => {
			return <li key={index}>{error}</li>;
		});

	return (
		<li>
			<p>{`${props.originalFilename}.svg`}</p>
			{props.errors && <ul>{errorsChildren()}</ul>}
		</li>
	);
};
