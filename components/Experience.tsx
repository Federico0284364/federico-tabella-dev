import type { Experience } from "@/models/experience";
import TechnologyTag from "./Technology";
import { getTechnologyByName } from "@/models/project";

type Props = {
	experience: Experience;
};

export default function Experience({ experience }: Props) {
	return (
		<div className="flex text-fg flex-col md:flex-row gap-4 md:gap-10 ">
			<p className="text-fg-muted">{experience.date}</p>
			<div>
        <h2 className="text-2xl font-semibold">{experience?.name}</h2>
				<p className="mt-1">{experience?.description?.main}</p>
				<p className="mt-2">{experience?.description?.secondary}</p>
				<ul className="list-disc pl-5">
					{experience?.description?.list?.map((element, index) => {
						return <li key={'experience' + index}>{element}</li>;
					})}
				</ul>
			</div>
			<ul className="flex flex-wrap gap-2 mt-4">
				{experience.technologyNames.map((techName) => {
					const technology = getTechnologyByName(techName);
					return (
						<li key={techName + experience.name}>
							<TechnologyTag technology={technology} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
