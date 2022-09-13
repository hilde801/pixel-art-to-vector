import { FC } from "react";
import { FooterComponent } from "../footercomponent";
import { HeaderComponent } from "../headercomponent";

export const AppComponent: FC = () => {
	return (
		<>
			<HeaderComponent />

			<FooterComponent />
		</>
	);
};
