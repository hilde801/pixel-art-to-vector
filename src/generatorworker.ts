/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

const generatorWorker = (): void => {
	onmessage = () => {
		// TODO Add something here later
	};
};

export const newGeneratorWorkerInstance = (): Worker => {
	const blob: Blob = new Blob([`(${generatorWorker.toString()})()`]);
	return new Worker(URL.createObjectURL(blob));
};
