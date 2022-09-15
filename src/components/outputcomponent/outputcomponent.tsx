import JSZip from "jszip";
import { FC, ReactElement, useContext, useState } from "react";
import { Download } from "react-feather";
import { TasksContext } from "../../contexts/taskscontext";
import Task from "../../lib/task";
import { IconAnchor } from "../iconanchor";
import { TasksListItem } from "./taskslistitem";

export const OutputComponent: FC = () => {
	const [downloadLink, setDownloadLink] = useState<string>();

	const { tasks } = useContext(TasksContext);

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

	const downloadFilename: string = btoa(Date.now().toString()).replaceAll("=", "");

	return (
		<output>
			<ul>{tasksListItems}</ul>
			{downloadLink && <IconAnchor text="Download" icon={<Download />} download={downloadFilename} href={downloadLink} />}
		</output>
	);
};
