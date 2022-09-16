/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import { Root, createRoot } from "react-dom/client";
import { AppComponent } from "./components/appcomponent";
import "./localizations/i18next";
import "./global.css";

const rootElement: HTMLElement = document.getElementById("root")!,
	root: Root = createRoot(rootElement);

root.render(<AppComponent />);
