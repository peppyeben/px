import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const navLinksLeft = [
		{ title: "Home", to: "/" },
		{ title: "Donate", to: "/Donate" },
	];
	const navLinksRight = [
		{ title: "About", to: "/about" },
		{ title: "Contact", to: "/contact" },
		{ title: "Start a MetroFund", to: "/create" },
	];

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-full mx-auto px-5 lg:px-10 bg-white shadow-2xl'>
			<div className='flex justify-between items-center py-2 lg:py-2'>
				{/* Desktop Links for the Left Side */}
				<div className='hidden lg:flex space-x-5'>
					{navLinksLeft.map((link, index) => (
						<Link
							key={index}
							to={link.to === "#" ? "" : link.to}
							className='text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition duration-300'
						>
							{link.title}
						</Link>
					))}
				</div>

				{/* Logo which is placed in the Center for desktop view */}
				<Link to='/'>
					<img src={logo2} alt='Logo' className='w-32 md:w-44' />
				</Link>

				{/* Desktop Links for the Right Side */}
				<div className='hidden lg:flex space-x-5'>
					{navLinksRight.map((link, index) => (
						<Link
							key={index}
							to={link.to === "#" ? "" : link.to}
							className={`text-sm cursor-pointer font-medium hover:text-gray-900 transition duration-300 ${
								link.title === "Start a MetroFund"
									? "text-white bg-purple-700 px-4 py-2 rounded-full"
									: "text-gray-700"
							}`}
						>
							{link.title}
						</Link>
					))}
				</div>

				{/* Mobile Hamburger Menu */}
				<div className='lg:hidden'>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<IoCloseCircleOutline size='1.5rem' />
						) : (
							<GiHamburgerMenu size='1.5rem' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Sliding Menu */}
			<div
				className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out w-4/5 max-w-xs shadow-lg z-50 px-2 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className='flex justify-between items-center p-5'>
					{/* Logo */}
					<Link to='/' onClick={() => setIsOpen(false)}>
						<img src={logo2} alt='Logo' className='h-10' />
					</Link>

					{/* Close Button */}
					<button onClick={() => setIsOpen(false)}>
						<IoCloseCircleOutline size='1.5rem' />
					</button>
				</div>
				<div className='mt-4 space-y-4'>
					{[...navLinksLeft, ...navLinksRight].map((link, index) => (
						<Link
							key={index}
							to={link.to === "#" ? "" : link.to}
							onClick={() => setIsOpen(false)}
							className={`block text-lg font-medium px-4 py-2 transition duration-200 rounded-lg ${
								link.title === "Start a MetroFund"
									? "text-white bg-purple-700 rounded-full"
									: "text-gray-700 bg-gray-200 hover:bg-gray-300"
							}`}
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>

			{/* Black Overlay for Mobile Menu */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black opacity-50 z-40'
					onClick={() => setIsOpen(false)}
				></div>
			)}
		</div>
	);
};

export default Navbar;