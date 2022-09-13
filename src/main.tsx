import { Root, createRoot } from "react-dom/client";
import "./i18next";

const rootElement: HTMLElement = document.getElementById("root")!,
	root: Root = createRoot(rootElement);

root.render(<h1>Hello, World!</h1>);
