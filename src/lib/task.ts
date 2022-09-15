import Vector from "./vector";

type Task = {
	originalFilename: string;
	vector: Vector;
	errors?: string[];
	elementString?: string;
};

export default Task;
