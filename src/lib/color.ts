/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

class Color {
	private _red: number;
	private _green: number;
	private _blue: number;
	private _alpha: number;

	constructor(red: number, green: number, blue: number, alpha: number) {
		this._red = red;
		this._green = green;
		this._blue = blue;
		this._alpha = alpha;
	}

	private static generateColorHex = (color: number): string => {
		const hex: string = color.toString(16).toLocaleUpperCase();
		return hex.length == 2 ? hex : `0${hex}`;
	};

	public get hexString(): string {
		const redString: string = Color.generateColorHex(this._red),
			greenString: string = Color.generateColorHex(this._green),
			blueString: string = Color.generateColorHex(this._blue),
			alphaString: string = Color.generateColorHex(this._alpha);

		return `#${redString}${greenString}${blueString}${alphaString}`;
	}

	public get red(): number {
		return this._red;
	}

	public get green(): number {
		return this._green;
	}

	public get blue(): number {
		return this._blue;
	}

	public get alpha(): number {
		return this._alpha;
	}
}

export default Color;
