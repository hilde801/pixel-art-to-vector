import { FC, useState } from "react";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";
import { MainForm } from "../mainform";

export const AppComponent: FC = () => {
	const [files, setFiles] = useState<File[]>([]);

	return (
		<>
			<HeaderComponent />

			<main>
				{files.length <= 0 && <MainForm onSubmit={(files: File[]) => setFiles(files)} />}
				{files.length > 0 && <p>Process files here...</p>}
			</main>

			<FooterComponent />
		</>
	);
};
