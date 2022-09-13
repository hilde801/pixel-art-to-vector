import { Root, createRoot } from "react-dom/client";

const rootElement: HTMLElement = document.getElementById("root")!,
	root: Root = createRoot(rootElement);

root.render(<h1>Hello, World!</h1>);
