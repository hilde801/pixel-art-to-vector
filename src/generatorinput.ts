/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

export type GeneratorInputItem = {
	filename: string;
	imageData: Uint8ArrayConstructor;
	width: number;
	height: number;
};

export type GeneratorInput = {
	items: GeneratorInputItem[];
};
