import imgMvp from "../assets/btb mvp.png";
import imgV1 from "../assets/btb V1.png";

const Projet = () => {
	return (
		<div id="projet" className="mt-[80px] mb-[100px]">
			<div className="flex justify-center items-center flex-col">
				<h1 className="font-bold text-4xl title">PROJET</h1>
				<p className="mt-6 text-center max-w-[1000px] md:text-xl">
					BeatTheBeat offre une expérience de jeu musicale interactive et sociale, combinant défi et découverte. Avec une base solide de fonctionnalités principales et la possibilité
					d'ajouter des fonctionnalités supplémentaires, cette application est prête à offrir aux mélomanes une plateforme de quiz musical unique.
				</p>

				<div className="flex mt-[60px] flex-col md:flex-row md:gap-10 items-start">
					<div className="flex flex-col justify-center items-center">
						<h2 className="font-bold text-xl">MVP (06/10/2023)</h2>
						<div className="project-card bg-[#313131]  text-white font-semibold mt-4 rounded-lg p-6 md:max-w-[800px] md:max-h-full flex flex-col justify-center ">
							<ul className="font-normal">
								<p>- Site hébergé</p>
								<p>- Création de salon multijoueurs</p>
								<p>- Creation de quizz avec thématique</p>
							</ul>
							<img src={imgMvp} className="rounded-lg mt-4 " />
						</div>
					</div>
					<div className="flex flex-col justify-center items-center mt-8 md:mt-0">
						<h2 className="font-bold text-xl">V1 (23/10/2023)</h2>
						<div className="project-card bg-[#313131] text-white font-semibold mt-4 rounded-lg p-6 md:max-w-[800px] md:max-h-full flex flex-col justify-center ">
							<ul className="font-normal">
								<p>- Site Hébergé : La plateforme sera accessible via un navigateur web.</p>
								<p>- Création de Salon Multijoueurs : Les utilisateurs peuvent créer des salons de jeu pour jouer avec des amis.</p>
								<p>- Types Variés de Questions : Différents formats et niveaux de difficulté de questions basées sur la musique.</p>
								<p>- Système de Comptage de Points : Un système de score pour chaque joueur en fonction de ses bonnes réponses.</p>
								<p>- Classement au Sein d'un Salon : Une liste de classement pour comparer les scores des joueurs dans un salon.</p>
								<p>- Création de Quizz avec Thématique : Des quizz classés par genres, époques, artistes, etc.</p>
								<p>- Chat dans le Salon : Un espace de discussion pour les joueurs d'un salon pour communiquer entre eux.</p>
								<p>- Favoris : Les utilisateurs peuvent ajouter à leurs favoris les morceaux de musique présentés pendant le quizz.</p>
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
