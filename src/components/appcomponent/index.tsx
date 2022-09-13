import { FC } from "react";
import { useTranslation } from "react-i18next";

export const AppComponent: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t("headerComponent:title")}</h1>
			<p>{t("headerComponent:description")}</p>
		</>
	);
};
