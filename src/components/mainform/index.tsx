/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { FC, FormEvent, FormEventHandler } from "react";
import MainFormStyles from "./mainform.module.css";

export type OnSubmitMainForm = {
	(files: File[]): void;
};

export type MainFormProps = {
	onSubmit?: OnSubmitMainForm;
};

export const MainForm: FC<MainFormProps> = (props: MainFormProps) => {
	const onSubmit: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();

		if (props.onSubmit) {
			const files: FileList = (event.target as any).fileInput.files,
				filesArray: File[] = [];

			for (let i = 0; i < files.length; i++) filesArray.push(files[i]);

			props.onSubmit(filesArray);
		}
	};

	return (
		<form onSubmit={onSubmit} className={MainFormStyles.mainForm}>
			<label htmlFor="fileInput">Upload your file</label>
			<input type="file" name="fileInput" id="fileInput" accept="image/*" multiple required />
			<input type="reset" value="Reset" />
			<input type="submit" value="Submit" />
		</form>
	);
};
