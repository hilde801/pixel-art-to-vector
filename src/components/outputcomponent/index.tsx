/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import JSZip from "jszip";
import { FC, ReactElement, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { TasksContext } from "../../contexts/taskscontext";
/* import Task from "../../lib/task"; */
import { TasksListItem } from "./taskslistitem";

import OutputComponentStyles from "./outputcomponent.module.css";

/* export const OutputComponent: FC = () => {
	const [downloadLink, setDownloadLink] = useState<string>();

	const { tasks } = useContext(TasksContext);

	const { t } = useTranslation();

	const jsZip: JSZip = new JSZip(),
		tasksListItems: ReactElement[] = [];

	tasks.forEach((task: Task, index: number) => {
		if (task.elementString) {
			jsZip.file(`${task.originalFilename}.svg`, task.elementString);
		}

		tasksListItems.push(<TasksListItem {...task} key={index} />);
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
}; */
