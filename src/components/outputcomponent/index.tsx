/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import JSZip from "jszip";
import { FC, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { OutputListItem, OutputListItemProps } from "./outputlistitem";
import { renderToStaticMarkup } from "react-dom/server";

import OutputComponentStyles from "./outputcomponent.module.css";

export type OutputComponentProps = {
	items: OutputListItemProps[];
};

export const OutputComponent: FC<OutputComponentProps> = (props: OutputComponentProps) => {
	const [downloadLink, setDownloadLink] = useState<string>();

	const { t } = useTranslation();

	const jsZip: JSZip = new JSZip(),
		tasksListItems: ReactElement[] = [];

	props.items.forEach((item: OutputListItemProps, index: number) => {
		if (item.errorKeys.length == 0) {
			jsZip.file(`${item.filename}.svg`, renderToStaticMarkup(item.vectorComponent!));
		}

		tasksListItems.push(<OutputListItem {...item} key={index} />);
	});

	jsZip.generateAsync({ type: "base64" }).then((base64: string) => {
		const tempDataUrl: string = `data:application/zip;base64,${base64}`;
		setDownloadLink(tempDataUrl);
	});

	const getDownloadLink = (): ReactElement => {
		const filename: string = btoa(Date.now().toString()).replaceAll("=", "");

		return (
			<a download={filename} href={downloadLink}>
				{t("outputComponent:download")}
			</a>
		);
	};

	return (
		<output className={OutputComponentStyles.outputComponent}>
			<ul className={OutputComponentStyles.tasksList}>{tasksListItems}</ul>
			{downloadLink && getDownloadLink()}
		</output>
	);
};
