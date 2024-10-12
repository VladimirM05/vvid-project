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
declare module '*mp3';

interface Window {
	ethereum: {
		isMetaMask?: boolean;
		request: (args: { method: string }) => Promise<any>;
	};
}

declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __ENV__: 'production' | 'development';
