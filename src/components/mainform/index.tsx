import { FC } from "react";

export const MainForm: FC = () => {
	return (
		<form>
			<label htmlFor="fileInput">Upload your file</label>
			<input type="file" name="fileInput" id="fileInput" accept="image/*" required />
			<input type="reset" value="Reset" />
			<input type="reset" value="Submit" />
		</form>
	);
};
