/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

export type GeneratorOutputItem = {
	filename: string;
	markup?: string;
	errorKeys?: string[];
};

export type GeneratorOutput = {
	items: GeneratorOutputItem[];
};
