/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

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
