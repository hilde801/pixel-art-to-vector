import { FC } from "react";
import IconAnchorProps from "./iconanchorprops";

export const IconAnchor: FC<IconAnchorProps> = (props: IconAnchorProps) => {
	return (
		<a {...props}>
			<>
				{props.icon}
				<p>{props.text}</p>
			</>
		</a>
	);
};
