import { FC } from "react";
import { GitHub } from "react-feather";
import { useTranslation } from "react-i18next";
import { author, repository } from "../../../package.json";

export const FooterComponent: FC = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<a href={repository} target={"_blank"}>
				<GitHub />
				<p>{t("footerComponent:visitRepository")}</p>
			</a>

			<p>{t("footerComponent:copyrightText", { authorName: author.name })}</p>
		</footer>
	);
};
