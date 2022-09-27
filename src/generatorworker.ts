/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { GeneratorInput, GeneratorInputItem } from "./generatorinput";
import { GeneratorOutput, GeneratorOutputItem } from "./generatoroutput";

const generatorWorker = (): void => {
	onmessage = (message: MessageEvent<string>) => {
		const input: GeneratorInput = JSON.parse(message.data);

		const items: GeneratorOutputItem[] = input.items.map((item: GeneratorInputItem) => {
			return {
				filename: item.filename
			};
		});

		const output: GeneratorOutput = { items };
		postMessage(JSON.stringify(output));
	};
};

export const newGeneratorWorkerInstance = (): Worker => {
	const blob: Blob = new Blob([`(${generatorWorker.toString()})()`]);
	return new Worker(URL.createObjectURL(blob));
};
