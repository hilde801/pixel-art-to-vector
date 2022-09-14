import { FC, useState } from "react";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm, OnSubmitMainForm } from "../mainform";

export const AppComponent: FC = () => {
	const [files, setFiles] = useState<File[]>([]);

	const onSubmitMainForm: OnSubmitMainForm = (files: File[]) => {
		/** @Todo Add something here later */
	};

	return (
		<>
			<HeaderComponent />

			<main>
				{files.length <= 0 && <MainForm onSubmit={onSubmitMainForm} />}
				{files.length > 0 && <p>Process files here...</p>}
			</main>

			<FooterComponent />
		</>
	);
};
