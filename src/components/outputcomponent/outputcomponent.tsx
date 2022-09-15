import JSZip from "jszip";
import { FC, ReactElement, useContext, useState } from "react";
import { Download } from "react-feather";
import { useTranslation } from "react-i18next";
import { TasksContext } from "../../contexts/taskscontext";
import Task from "../../lib/task";
import { IconAnchor } from "../iconanchor";
import { TasksListItem } from "./taskslistitem";

export const OutputComponent: FC = () => {
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
		const text: string = t("outputComponent:download"),
			icon: ReactElement = <Download />,
			filename: string = btoa(Date.now().toString()).replaceAll("=", "");

		return <IconAnchor text={text} icon={<Download />} download={filename} href={downloadLink} />;
	};

	return (
		<output>
			<ul>{tasksListItems}</ul>
			{downloadLink && getDownloadLink()}
		</output>
	);
};