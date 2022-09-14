import Vector from "./vector";

type Task = {
	originalFilename: string;
	vector: Vector;
	errors?: string[];
};

export default Task;
