declare module "*" {
	const content: any;
	export default content;
}

interface Window {
	ethereum: {
		isMetaMask?: boolean;
		request: (args: { method: string }) => Promise<any>;
	};
}
