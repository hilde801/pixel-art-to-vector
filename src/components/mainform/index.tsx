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

		if (props.onSubmit) {
			const files: FileList = (event.target as any).fileInput.files,
				filesArray: File[] = [];

			for (let i = 0; i < files.length; i++) filesArray.push(files[i]);

			props.onSubmit(filesArray);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="fileInput">Upload your file</label>
			<input type="file" name="fileInput" id="fileInput" accept="image/*" required />
			<input type="reset" value="Reset" />
			<input type="submit" value="Submit" />
		</form>
	);
};
