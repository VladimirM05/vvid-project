import { IBlock } from "../interfaces/IBlock";
import dirt1 from "../assets/images/dirt-1.jpg";
import dirt2 from "../assets/images/dirt-2.jpg";
import dirt3 from "../assets/images/dirt-3.jpg";
import dirt4 from "../assets/images/dirt-4.jpg";
import grass1 from "../assets/images/grass-1.jpg";
import grass2 from "../assets/images/grass-2.jpg";
import grass3 from "../assets/images/grass-3.jpg";
import grass4 from "../assets/images/grass-4.jpg";
import wood1 from "../assets/images/wood-1.jpg";
import wood2 from "../assets/images/wood-2.jpg";
import wood3 from "../assets/images/wood-3.jpg";
import wood4 from "../assets/images/wood-4.jpg";
import cobblestone1 from "../assets/images/cobblestone-1.jpg";
import cobblestone2 from "../assets/images/cobblestone-2.jpg";
import cobblestone3 from "../assets/images/cobblestone-3.jpg";
import cobblestone4 from "../assets/images/cobblestone-4.jpg";
import diamond1 from "../assets/images/diamond-1.jpg";
import diamond2 from "../assets/images/diamond-2.jpg";
import diamond3 from "../assets/images/diamond-3.jpg";
import diamond4 from "../assets/images/diamond-4.jpg";
import tnt from "../assets/images/tnt.jpg";

const blocksArray: IBlock[][] = [
	[
		{
			src: dirt1,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: dirt2,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: dirt3,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: dirt4,
			endurance: 1,
			cost: 2,
			kind: 1,
		},
	],
	[
		{
			src: grass1,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: grass2,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: grass3,
			endurance: 1,
			cost: 1,
			kind: 1,
		},
		{
			src: grass4,
			endurance: 1,
			cost: 2,
			kind: 1,
		},
	],
	[
		{
			src: wood1,
			endurance: 2,
			cost: 1,
			kind: 2,
		},
		{
			src: wood2,
			endurance: 2,
			cost: 1,
			kind: 2,
		},
		{
			src: wood3,
			endurance: 2,
			cost: 1,
			kind: 2,
		},
		{
			src: wood4,
			endurance: 2,
			cost: 5,
			kind: 2,
		},
	],
	[
		{
			src: cobblestone1,
			endurance: 3,
			cost: 1,
			kind: 3,
		},
		{
			src: cobblestone2,
			endurance: 3,
			cost: 1,
			kind: 3,
		},
		{
			src: cobblestone3,
			endurance: 3,
			cost: 1,
			kind: 3,
		},
		{
			src: cobblestone4,
			endurance: 3,
			cost: 10,
			kind: 3,
		},
	],
	[
		{
			src: diamond1,
			endurance: 5,
			cost: 1,
			kind: 4,
		},
		{
			src: diamond2,
			endurance: 5,
			cost: 1,
			kind: 4,
		},
		{
			src: diamond3,
			endurance: 5,
			cost: 1,
			kind: 4,
		},
		{
			src: diamond4,
			endurance: 5,
			cost: 25,
			kind: 4,
		},
	],
	[
		{
			src: tnt,
			endurance: 1,
			cost: -5,
			kind: 5,
		},
	],
];

export { blocksArray };