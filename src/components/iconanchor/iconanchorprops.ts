import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactComponentElement, ReactElement } from "react";

type IconAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	icon: ReactElement;
	text: string;
};

export default IconAnchorProps;
