/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { FC, useState } from "react";
import { GeneratorInputItem } from "../../generatorworker";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";

type Status = "Ready" | "Working" | "Finished";

export const AppComponent: FC = () => {
	const [status, setStatus] = useState<Status>("Ready");

	const readFile = (file: File): Promise<string> =>
		new Promise((resolve) => {
			const fileReader: FileReader = new FileReader();

			fileReader.onload = () => {
				return resolve(String(fileReader.result));
			};

			fileReader.readAsDataURL(file);
		});

	const getImageData = (input: string): Promise<ImageData> =>
		new Promise<ImageData>((resolve) => {
			const image: HTMLImageElement = document.createElement("img");

			image.onload = () => {
				const canvas: HTMLCanvasElement = document.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;

				const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
				context.drawImage(image, 0, 0, canvas.width, canvas.height);

				const imageData: ImageData = context.getImageData(0, 0, canvas.width, canvas.height);
				return resolve(imageData);
			};

			image.src = String(input);
		});

	const onSubmitMainForm: OnSubmitMainForm = async (files: File[]) => {
		setStatus("Working");
		const inputs: GeneratorInputItem[] = [];

		for (let i = 0; i < files.length; i++) {
			const fileResult: string = await readFile(files[i]),
				imageData: ImageData = await getImageData(fileResult);

			inputs.push({
				imageData: imageData.data,
				filename: files[i].name,
				width: imageData.width,
				height: imageData.height
			});
		}

		console.log(inputs);
		setStatus("Finished");
	};

	return (
		<>
			<HeaderComponent />

			<main>
				{/** @Todo Add something here later */}
				{/** @Todo Add something here later */}
				{/** @Todo Add something here later */}

				{status == "Ready" && <MainForm onSubmit={onSubmitMainForm} />}
				{status == "Working" && <p>Working...</p>}
			</main>

			<FooterComponent />
		</>
	);
};
