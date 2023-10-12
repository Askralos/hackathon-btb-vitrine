import TeamCard from "./TeamCard/TeamCard";
import { team } from "../data";

const Team = () => {
	return (
		<div id="team" className="mt-[80px]">
			<div className="flex flex-col justify-center items-center">
				<h1 className="font-bold text-4xl title">TEAMS</h1>
				<div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
          {team.map((data, index) =>(
            <TeamCard key={index} {...data} />
          ))}
					
				</div>
			</div>
		</div>
	);
};

export default Team;
