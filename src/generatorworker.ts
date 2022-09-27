/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

export type GeneratorInputItem = {
	imageData: number[];
	filename: string;
	width: number;
	height: number;
};

export type GeneratorInput = {
	items: GeneratorInputItem[];
};

export type GeneratorOutputItem = {
	filename: string;
	pixelPropsArray?: any[];
	errorKeys?: string[];
};

export type GeneratorOutput = {
	items: GeneratorOutputItem[];
};

const generatorWorker = (): void => {
	onmessage = (message: MessageEvent<string>) => {
		const input: GeneratorInput = JSON.parse(message.data),
			items: GeneratorOutputItem[] = [];

		for (let i = 0; i < input.items.length; i++) {
			const generateColorHex = (color: number): string => {
				const hex: string = color.toString(16).toLocaleUpperCase();
				return hex.length == 2 ? hex : `0${hex}`;
			};

			const hexString = (red: number, green: number, blue: number, alpha: number): string => {
				const redString: string = generateColorHex(red),
					greenString: string = generateColorHex(green),
					blueString: string = generateColorHex(blue),
					alphaString: string = generateColorHex(alpha);

				return `#${redString}${greenString}${blueString}${alphaString}`;
			};

			const errorKeys: string[] = [];

			if (input.items[i].width > 256 || input.items[i].height > 256) {
				errorKeys.push("errors:exceedMaximumSize");
			}

			const pixelProps: any[] = [];

			if (errorKeys.length == 0) {
				for (let j = 0; j < input.items[i].imageData.length; j += 4) {
					const red: number = input.items[i].imageData[j],
						green: number = input.items[i].imageData[j + 1],
						blue: number = input.items[i].imageData[j + 2],
						alpha: number = input.items[i].imageData[j + 3];

					if (alpha > 0) {
						const index = j / 4,
							y = Math.trunc(index / input.items[i].width),
							x = index % input.items[i].width;

						pixelProps.push({
							x,
							y,
							width: 1,
							height: 1,
							style: {
								fill: hexString(red, green, blue, alpha),
								fillOpacity: alpha / 255
							},
							key: index
						});
					}
				}
			}

			items.push({
				filename: input.items[i].filename,
				errorKeys: errorKeys.length > 0 ? errorKeys : undefined,
				pixelPropsArray: pixelProps.length > 0 ? pixelProps : undefined
			});
		}

		const output: GeneratorOutput = { items };
		postMessage(JSON.stringify(output));
	};
};

export const newGeneratorWorkerInstance = (): Worker => {
	const blob: Blob = new Blob([`(${generatorWorker.toString()})()`]);
	return new Worker(URL.createObjectURL(blob));
};
