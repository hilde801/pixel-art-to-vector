/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { FC } from "react";
import { GitHub } from "react-feather";
import { useTranslation } from "react-i18next";
import { author, repository } from "../../../package.json";
import { IconAnchor } from "../iconanchor";

export const FooterComponent: FC = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<IconAnchor text={t("footerComponent:visitRepository")} icon={<GitHub />} href={repository} />
			<p>{t("footerComponent:copyrightText", { authorName: author.name })}</p>
		</footer>
	);
};
