/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { createElement, FC, ReactElement, useState } from "react";
import * as GeneratorWorker from "../../generatorworker";
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
		const items: GeneratorWorker.GeneratorInputItem[] = [];

		for (let i = 0; i < files.length; i++) {
			const fileResult: string = await readFile(files[i]),
				imageData: ImageData = await getImageData(fileResult);

			const numberArray: number[] = [];

			for (let j = 0; j < imageData.data.length; j++) {
				numberArray.push(imageData.data[j]);
			}

			items.push({
				imageData: numberArray,
				filename: files[i].name,
				width: imageData.width,
				height: imageData.height
			});
		}

		const input: GeneratorWorker.GeneratorInput = { items },
			worker: Worker = GeneratorWorker.newGeneratorWorkerInstance();

		worker.onmessage = (message: MessageEvent<string>) => {
			const outputs: GeneratorWorker.GeneratorOutput = JSON.parse(message.data),
				temp: any[] = [];

			for (let i = 0; i < outputs.items.length; i++) {
				if (outputs.items[i].errorKeys.length == 0) {
					const rects: ReactElement[] = outputs.items[i].pixelPropsArray!.map((props: any, key: number) => {
						return <rect {...props} key={key} />;
					});

					const props = { width: outputs.items[i].width, height: outputs.items[i].height };

					temp.push(createElement("svg", props, rects));
				} else temp.push(undefined);
			}

			setStatus("Finished");
		};

		worker.postMessage(JSON.stringify(input));
	};

	return (
		<>
			<HeaderComponent />

			<main>
				{status == "Ready" && <MainForm onSubmit={onSubmitMainForm} />}
				{status == "Working" && <p>Working...</p>}
			</main>

			<FooterComponent />
		</>
	);
};
