import { FC, useContext } from "react";
import { TasksContext } from "../../contexts/taskscontext";

export const OutputComponent: FC = () => {
	const { tasks } = useContext(TasksContext);

	return (
		<output>
			<ul>{/** @Todo Add something here later */}</ul>

			{/** @Todo Add something here later */}
		</output>
	);
};
