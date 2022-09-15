/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { createElement, ReactSVGElement, SVGAttributes } from "react";
import Color from "./color";
import Pixel from "./pixel";

class Vector {
	private _imageData: ImageData;

	constructor(imageData: ImageData) {
		this._imageData = imageData;
	}

	public generate = async (): Promise<ReactSVGElement> => {
		const elements: ReactSVGElement[] = [];

		for (let i = 0; i < this._imageData.data.length; i += 4) {
			const red: number = this._imageData.data[i],
				green: number = this._imageData.data[i + 1],
				blue: number = this._imageData.data[i + 2],
				alpha: number = this._imageData.data[i + 3];

			if (alpha > 0) {
				const index = i / 4,
					y = Math.trunc(index / this._imageData.width),
					x = index % this._imageData.width;

				const pixel: Pixel = new Pixel(x, y, new Color(red, green, blue, alpha));
				elements.push(pixel.getElement(index));
			}
		}

		const props: SVGAttributes<SVGElement> = {
			xmlns: "http://www.w3.org/2000/svg",
			width: this._imageData.width,
			height: this._imageData.height
		};

		return createElement("svg", props, elements);
	};

	public static fromFile = (file: File): Promise<Vector> =>
		new Promise<Vector>((resolve) => {
			const fileReader: FileReader = new FileReader();

			fileReader.onload = () => {
				const image: HTMLImageElement = document.createElement("img");

				image.onload = () => {
					const canvas: HTMLCanvasElement = document.createElement("canvas");
					canvas.width = image.width;
					canvas.height = image.height;

					const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
					context.drawImage(image, 0, 0, image.width, image.height);

					const imageData: ImageData = context.getImageData(0, 0, image.width, image.height);
					resolve(new Vector(imageData));
				};

				image.src = String(fileReader.result);
			};

			fileReader.readAsDataURL(file);
		});

	public get width(): number {
		return this._imageData.width;
	}

	public get height(): number {
		return this._imageData.height;
	}
}

export default Vector;
