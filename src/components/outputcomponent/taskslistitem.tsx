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
