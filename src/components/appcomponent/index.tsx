import { FC, useState } from "react";
import Vector from "../../lib/vector";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";
import Task from "./task";

export const AppComponent: FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const onSubmitMainForm: OnSubmitMainForm = (files: File[]) => {
		files.forEach((file: File) => {
			const fileReader: FileReader = new FileReader();

			fileReader.onload = () => {
				const imageElement: HTMLImageElement = document.createElement("img");

				imageElement.onload = () => {
					const canvasElement: HTMLCanvasElement = document.createElement("canvas");
					canvasElement.width = imageElement.width;
					canvasElement.height = imageElement.height;

					const context: CanvasRenderingContext2D = canvasElement.getContext("2d")!;
					context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

					const imageData: ImageData = context.getImageData(0, 0, imageElement.width, imageElement.height),
						tempVector: Vector = new Vector(imageData),
						tempTask: Task = new Task(tempVector, file.name);

					setTasks((current: Task[]) => [...current, tempTask]);
				};

				imageElement.src = String(fileReader.result);
			};

			fileReader.readAsDataURL(file);
		});
	};

	return (
		<>
			<HeaderComponent />

			<main>
				{tasks.length <= 0 && <MainForm onSubmit={onSubmitMainForm} />}
				{tasks.length > 0 && <p>{tasks.length}</p>}
			</main>

			<FooterComponent />
		</>
	);
};
