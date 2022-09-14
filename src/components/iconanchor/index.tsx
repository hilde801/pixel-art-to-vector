import { AnchorHTMLAttributes, FC, ReactElement } from "react";

export type IconAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	icon: ReactElement;
	text: string;
};

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
