/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

type GeneratorOutput = {
	outputs: {
		filename: string;
		markup?: string;
		errors?: string[];
	}[];
};

export default GeneratorOutput;
