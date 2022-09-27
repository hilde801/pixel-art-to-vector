/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

export type GeneratorInputItem = {
	filename: string;
	imageData: Uint8ClampedArray;
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
		const input: GeneratorInput = JSON.parse(message.data);

		const items: GeneratorOutputItem[] = input.items.map((item: GeneratorInputItem) => {
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

			if (item.width > 256 || item.height > 256) {
				errorKeys.push("errors:exceedMaximumSize");
			}

			const pixelProps: any[] = [];

			for (let i = 0; i < item.imageData.length; i += 4) {
				const red: number = item.imageData[i],
					green: number = item.imageData[i + 1],
					blue: number = item.imageData[i + 2],
					alpha: number = item.imageData[i + 3];

				if (alpha > 0) {
					const index = i / 4,
						y = Math.trunc(index / item.width),
						x = index % item.width;

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

			return {
				filename: item.filename,
				errorKeys: errorKeys.length > 0 ? errorKeys : undefined,
				pixelPropsArray: errorKeys.length > 0 ? pixelProps : undefined
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
