import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className="flex sticky top-0 z-50 justify-between text-white bg-[#6b64f3] items-center h-16 w-full px-8 md:px-20">
			<h1 className="w-full text-2xl font-bold text-primary">BeatTheBeat</h1>
			<ul className="nav-ul hidden md:flex md:text-2xl">
				<a href="#hero">
					<li className="p-4 cursor-pointer">Accueil</li>
				</a>
				<a href="#team">
					<li className="p-4 cursor-pointer">Team</li>
				</a>
				<a href="#projet">
					<li className="p-4 cursor-pointer">Projet</li>
				</a>
			</ul>

			<div onClick={() => setNav((prev) => !prev)} className="block md:hidden">
				{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div>

			<div className={nav ? "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000" : " fixed left-[-100%]"}>
				<h1 className="w-full text-xl font-bold text-primary m-4">BeatTheBeat</h1>
				<ul className="p-4 uppercase ">
					<li className="p-4 border-b border-gray-600 ">
						<a href="#hero">
							<span className="hover:ml-2 duration-200 cursor-pointer">Accueil</span>
						</a>
					</li>
					<li className="p-4 border-b border-gray-600 ">
						<a href="#team">
							<span className="hover:ml-2 duration-200 cursor-pointer">Team</span>
						</a>
					</li>
					<li className="p-4 border-b border-gray-600 ">
						<a href="#projet">
							<span className="hover:ml-2 duration-200 cursor-pointer">Projet</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
