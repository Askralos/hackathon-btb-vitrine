import imgMvp from "../assets/btb mvp.png";
import imgV1 from "../assets/btb V1.png";

const Projet = () => {
	return (
		<div id="projet" className="mt-[80px] mb-[100px]">
			<div className="flex justify-center items-center flex-col">
				<h1 className="font-bold text-4xl title">PROJET</h1>
				<p className="mt-6 text-center max-w-[1000px] md:text-xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis labore aliquam quas? Nulla rem aspernatur corporis ea tempora voluptatibus labore nihil quidem, minima
					temporibus, fuga facilis quam quisquam assumenda! Dolore velit aperiam doloribus tempore nisi qui delectus facilis, accusamus quisquam sunt earum error in, eius doloremque minima
					corrupti? Esse iure adipisci quae sed repudiandae sit reprehenderit assumenda numquam veniam? Molestias libero nihil ea non ut quae dolores expedita sit culpa voluptatum soluta nam
					autem earum.{" "}
				</p>

				<div className="flex mt-[60px] flex-col md:flex-row md:gap-10 items-start">
					<div className="flex flex-col justify-center items-center">
						<h2 className="font-bold text-xl">MVP (06/10/2023)</h2>
						<div className="project-card bg-[#313131]  text-white font-semibold mt-4 rounded-lg p-6 md:max-w-[800px] md:max-h-full flex flex-col justify-center ">
							<ul>
								<li>Page login/ signup fonctionnel </li>
								<li>home page </li>
								<li>lobby : on peut rejoindre une room et chat avec les personnes qui ont rejoint la room on ne peut pas encore lancer de game</li>
							</ul>
							<img src={imgMvp} className="rounded-lg mt-4 " />
						</div>
					</div>
          <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
						<h2 className="font-bold text-xl">V1 (23/10/2023)</h2>
						<div className="project-card bg-[#313131] text-white font-semibold mt-4 rounded-lg p-6 md:max-w-[800px] md:max-h-full flex flex-col justify-center ">
							<ul>
								<li>Page login/ signup fonctionnel </li>
								<li>home page </li>
								<li>lobby : on peut rejoindre une room et chat avec les personnes qui ont rejoint la room on ne peut pas encore lancer de game</li>
							</ul>
							<img src={imgV1} className="rounded-lg mt-4  " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projet;
