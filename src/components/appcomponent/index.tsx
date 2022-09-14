import { FC, useState } from "react";
import Vector from "../../lib/vector";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";
import Task from "../../lib/task";
import { useTranslation } from "react-i18next";
import { TasksContext } from "../../contexts/taskscontext";

export const AppComponent: FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const { t } = useTranslation();

	const onSubmitMainForm: OnSubmitMainForm = (files: File[]) => {
		files.forEach((file: File) => {
			Vector.fromFile(file).then((vector: Vector) => {
				const errors: string[] = [];

				if (vector.width > 256 || vector.height > 256) {
					errors.push(t("errors:exceedMaximumSize"));
				}

				const tempTask: Task = {
					originalFilename: file.name,
					vector,
					errors: errors.length > 0 ? errors : undefined
				};

				setTasks((current: Task[]) => [...current, tempTask]);
			});
		});
	};

	return (
		<TasksContext.Provider value={{ tasks }}>
			<HeaderComponent />

			<main>
				{tasks.length <= 0 && <MainForm onSubmit={onSubmitMainForm} />}
				{tasks.length > 0 && <p>{tasks.length}</p>}
			</main>

			<FooterComponent />
		</TasksContext.Provider>
	);
};
