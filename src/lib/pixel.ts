/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { createElement, ReactSVGElement, SVGAttributes } from "react";
import Color from "./color";

class Pixel {
	private _x: number;
	private _y: number;
	private _color: Color;

	constructor(x: number, y: number, color: Color) {
		this._x = x;
		this._y = y;
		this._color = color;
	}

	public getElement(key: number): ReactSVGElement {
		const props: SVGAttributes<SVGRectElement> = {
			x: this._x,
			y: this._y,
			width: 1,
			height: 1,
			style: {
				fill: this._color.hexString,
				fillOpacity: this._color.alpha / 255
			}
		};

		(props as any).key = key;
		return createElement("rect", props);
	}
}

export default Pixel;
