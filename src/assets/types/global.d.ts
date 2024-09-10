declare module '*.module.pcss' {
	interface IClassName {
		[className: string]: string;
	}
	const classNames: IClassName;
	export { classNames };
}

declare module '*png';
declare module '*.svg';
declare module '*jpg';
declare module '*jpeg';
declare module '*webp';

interface Window {
	ethereum: {
		isMetaMask?: boolean;
		request: (args: { method: string }) => Promise<any>;
	};
}
