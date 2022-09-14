import { FC, useState } from "react";
import Vector from "../../lib/vector";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";

export const AppComponent: FC = () => {
	const [vectors, setVector] = useState<Vector[]>([]);

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

					const imageData: ImageData = context.getImageData(0, 0, imageElement.width, imageElement.height);
					setVector((current: Vector[]) => [...current, new Vector(imageData)]);
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
				{vectors.length <= 0 && <MainForm onSubmit={onSubmitMainForm} />}
				{vectors.length > 0 && <p>{vectors.length}</p>}
			</main>

			<FooterComponent />
		</>
	);
};
