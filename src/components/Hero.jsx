import imgBTB from "../assets/BTB logo.png";

const Hero = () => {
	return (
		<div id="hero" className=" md:flex justify-center mt-20">
			<div className=" md:w-[1200px] lg:flex gap-20 justify-between items-center">
				<div className="mt-6">
					<h1 className="title text-4xl md:text-6xl font-bold">BeatTheBeat</h1>
					<p className="mt-6 md:text-xl">
						Plongez dans l'univers de la musique avec notre application web ! Testez vos connaissances à travers des énigmes sonores, défiez vos amis en temps réel et découvrez de nouveaux
						genres et artistes. BeatTheBeat adaptera sa difficulté à votre niveau. Êtes-vous prêt à devenir le maestro du quiz musical ? 🎵🎤🎶
					</p>
				</div>
				<img src={imgBTB} className="mt-10 rounded-md xl:h-[400px] " />
			</div>
		</div>
	);
};

export default Hero;
