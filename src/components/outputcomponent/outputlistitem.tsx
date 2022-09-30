/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import OutputListItemStyle from "./outputlistitem.module.css";

export type OutputListItemProps = {
	filename: string;
	errorKeys: string[];
	vectorComponent?: ReactElement;
};

export const OutputListItem: FC<OutputListItemProps> = (props: OutputListItemProps) => {
	const { t } = useTranslation();

	const errorsChildren = (): ReactElement[] =>
		props.errorKeys!.map((errorKey: string, index: number) => {
			return <li key={index}>{t(errorKey)}</li>;
		});

	return (
		<li className={OutputListItemStyle.tasksListItem}>
			<p className={OutputListItemStyle.filename}>{`${props.filename}.svg`}</p>
			{props.errorKeys && <ul className={OutputListItemStyle.errorsList}>{errorsChildren()}</ul>}
		</li>
	);
};
