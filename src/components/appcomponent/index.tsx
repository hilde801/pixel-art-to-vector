import { FC, useState } from "react";
import Vector from "../../lib/vector";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";
import Task from "../../lib/task";
import { useTranslation } from "react-i18next";
import { TasksContext } from "../../contexts/taskscontext";
import { renderToStaticMarkup } from "react-dom/server";
import { OutputComponent } from "../outputcomponent/outputcomponent";

export const AppComponent: FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const { t } = useTranslation();

	const onSubmitMainForm: OnSubmitMainForm = async (files: File[]) => {
		const tempTasks: Task[] = [];

		for (let i = 0; i < files.length; i++) {
			const vector: Vector = await Vector.fromFile(files[i]);
			const errors: string[] = [];

			if (vector.width > 256 || vector.height > 256) {
				errors.push(t("errors:exceedMaximumSize"));
			}

			/** @Todo Add more errors here when necessary */

			tempTasks.push({
				originalFilename: files[i].name,
				errors: errors.length > 0 ? errors : undefined,
				elementString: errors.length == 0 ? renderToStaticMarkup(await vector.generate()) : undefined
			});
		}

		setTasks(tempTasks);
	};

	return (
		<TasksContext.Provider value={{ tasks }}>
			<HeaderComponent />

			<main>
				{tasks.length <= 0 && <MainForm onSubmit={onSubmitMainForm} />}
				{tasks.length > 0 && <OutputComponent />}
			</main>

			<FooterComponent />
		</TasksContext.Provider>
	);
};
