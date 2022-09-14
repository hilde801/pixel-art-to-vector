import Vector from "../../lib/vector";

class Task {
	private _vector: Vector;
	private _originalFilename: string;

	constructor(vector: Vector, originalFilename: string) {
		this._vector = vector;
		this._originalFilename = originalFilename;
	}

	public static get maximumSize(): number {
		return 256;
	}

	public get exceedMaximumSize(): boolean {
		return this._vector.width <= Task.maximumSize && this._vector.height <= Task.maximumSize;
	}

	public get vector(): Vector {
		return this._vector;
	}

	public get originalFilename(): string {
		return this._originalFilename;
	}
}

export default Task;
