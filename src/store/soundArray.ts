import { ISound } from "../interfaces/ISound";
import Sdirt1 from "../assets/sounds/DirtSound/Dirt1.mp3";
import Sdirt2 from "../assets/sounds/DirtSound/Dirt2.mp3";
import Sdirt3 from "../assets/sounds/DirtSound/Dirt2.mp3";
import Sdirt4 from "../assets/sounds/DirtSound/Dirt4.mp3";
import Swood1 from "../assets/sounds/WoodSound/Wood1.mp3";
import Swood2 from "../assets/sounds/WoodSound/Wood2.mp3";
import Swood3 from "../assets/sounds/WoodSound/Wood3.mp3";
import Swood4 from "../assets/sounds/WoodSound/Wood4.mp3";
import Sstone1 from "../assets/sounds/StoneSound/Stone1.mp3";
import Sstone2 from "../assets/sounds/StoneSound/Stone2.mp3";
import Sstone3 from "../assets/sounds/StoneSound/Stone3.mp3";
import Sstone4 from "../assets/sounds/StoneSound/Stone4.mp3";
import Sdiamond1 from "../assets/sounds/DiamondSound/Diamond1.mp3";
import Sdiamond2 from "../assets/sounds/DiamondSound/Diamond2.mp3";
import Sdiamond3 from "../assets/sounds/DiamondSound/Diamond3.mp3";
import Sdiamond4 from "../assets/sounds/DiamondSound/Diamond4.mp3";
import tnt from "../assets/sounds/TNTSound/TNT.mp3";

const soundsArray: ISound[][] = [
	[
		{
			src: Sdirt1,
		},
		{
			src: Sdirt2,
		},
		{
			src: Sdirt3,
		},
		{
			src: Sdirt4,
		},
	],
	[
		{
			src: Sdirt1,
		},
		{
			src: Sdirt2,
		},
		{
			src: Sdirt3,
		},
		{
			src: Sdirt4,
		},
	],
	[
		{
			src: Swood1,
		},
		{
			src: Swood2,
		},
		{
			src: Swood3,
		},
		{
			src: Swood4,
		},
	],
	[
		{
			src: Sstone1,
		},
		{
			src: Sstone2,
		},
		{
			src: Sstone3,
		},
		{
			src: Sstone4,
		},
	],
	[
		{
			src: Sdiamond1,
		},
		{
			src: Sdiamond2,
		},
		{
			src: Sdiamond3,
		},
		{
			src: Sdiamond4,
		},
	],
	[
		{
			src: tnt,
		},
	],
];

export { soundsArray };
