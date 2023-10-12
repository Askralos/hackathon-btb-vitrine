import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Team from "./components/Team";
import Projet from "./components/Projet";

function App() {
	return (
		<>
			<Navbar />
			
			<div className="px-8 md:px-20">
        <Hero />
        <Team />
        <Projet />

        </div>
		</>
	);
}

export default App;
