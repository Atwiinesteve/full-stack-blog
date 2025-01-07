import React from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "./Image";


export default function Navbar() {
	const [open, setOpen] = React.useState(false);
	return (
		<div className="w-full h-16 md:h-20 flex justify-between items-center">
			{/* LOGO */}
			<div className="flex items-center gap-4 text-2xl font-bold">
				<Image alt="lama logo" h={32} w={32} src="logo.png" />
				<span>laMaLogo</span>
			</div>
			{/* MOBILE MENU */}
			<div className="md:hidden">
				{/* HAMBURGER MENU */}
				<div
					className="cursor-pointer"
					onClick={() => setOpen((previousAction) => !previousAction)}>
					{open ? <RxCross2 /> : <FaBars />}
				</div>
				{/* MOBILE LINKS LIST */}
				<div
					className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg bg-[#e6e6ff] transition-all ease-in-out ${
						open ? "-right-0" : "-right-[100%]"
					}`}>
					<a href="/">Home</a>
					<a href="/">Trending</a>
					<a href="/">Most Popular</a>
					<a href="/">About</a>
					<a href="/">
						<button className="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer">
							Login
						</button>
					</a>
				</div>
			</div>
			{/* DESKTOP MENU */}
			<div className="hidden md:flex gap-8 text-center font-medium xl:gap-12">
				<a href="/">Home</a>
				<a href="/">Trending</a>
				<a href="/">Most Popular</a>
				<a href="/">About</a>
				<a href="/">
					<button className="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer">
						Login
					</button>
				</a>
			</div>
		</div>
	);
}
