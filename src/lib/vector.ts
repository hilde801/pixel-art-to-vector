import { createElement, ReactSVGElement, SVGAttributes } from "react";
import Color from "./color";
import Pixel from "./pixel";

class Vector {
	private _imageData: ImageData;

	constructor(imageData: ImageData) {
		this._imageData = imageData;
	}

	public generateVector(): ReactSVGElement {
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
	}

	public get width(): number {
		return this._imageData.width;
	}

	public get height(): number {
		return this._imageData.height;
	}
}

export default Vector;
