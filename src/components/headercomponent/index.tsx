import { FC } from "react";
import { useTranslation } from "react-i18next";

export const HeaderComponent: FC = () => {
	const { t } = useTranslation();

	return (
		<header>
			<h1>{t("headerComponent:title")}</h1>
			<p>{t("headerComponent:description")}</p>
		</header>
	);
};
