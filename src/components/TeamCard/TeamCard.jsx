/* eslint-disable react/prop-types */
import "./TeamCard.scss";

const TeamCard = ({ img, people, classe, role }) => {
	return (
		<div className="card">
			<div className="card-border-top"></div>
			<div className="img ">
				<img src={img} className={`rounded-md`} />
			</div>
			<span className="mt-6">{people}</span>
			<p className="job"> {classe}</p>
			<p className="job"> {role}</p>
		</div>
	);
};

export default TeamCard;
