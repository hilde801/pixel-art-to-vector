import { FC, FormEvent, FormEventHandler } from "react";

export type OnSubmitMainForm = {
	(files: File[]): void;
};

export type MainFormProps = {
	onSubmit?: OnSubmitMainForm;
};

export const MainForm: FC<MainFormProps> = (props: MainFormProps) => {
	const onSubmit: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();

		/** @Todo Add something here later */
	};

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="fileInput">Upload your file</label>
			<input type="file" name="fileInput" id="fileInput" accept="image/*" required />
			<input type="reset" value="Reset" />
			<input type="reset" value="Submit" />
		</form>
	);
};
