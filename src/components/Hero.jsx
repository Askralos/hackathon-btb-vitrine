import imgBTB from "../assets/BeatTheBeat.png";

const Hero = () => {
	return (
		<div id="hero" className=" md:flex justify-center mt-20">
			<div className=" md:w-[1200px] lg:flex gap-20 justify-between items-center">
				<div className="mt-6">
					<h1 className="title text-4xl md:text-6xl font-bold">BeatTheBeat</h1>
					<p className="mt-6 md:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur temporibus officiis minus tempora minima, autem excepturi reprehenderit labore quam voluptate maiores
						magni, possimus quas nisi quos sit? Rem, magnam. Ratione provident culpa ea suscipit cupiditate, perspiciatis aspernatur quibusdam? Nam voluptatum culpa animi numquam delectus
						iste veniam, laboriosam quibusdam cupiditate
					</p>
				</div>
				<img src={imgBTB} className="mt-10 rounded-md xl:h-[400px] " />
			</div>
		</div>
	);
};

export default Hero;
