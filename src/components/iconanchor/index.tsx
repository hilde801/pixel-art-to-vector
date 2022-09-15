/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

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
