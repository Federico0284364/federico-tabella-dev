
import Image from "next/image";
import type { Technology } from "@/models/technology";

type Props = {
	technology: Technology;
};

export default function TechnologyTag({ technology }: Props) {
	return (
		<div className="flex items-center gap-2 px-3 py-1.5 bg-medium rounded-md">
			<Image
				alt={`${technology.name} logo`}
				src={technology.imageSrc}
				width={24}
				height={24}
			/>
			<p className="text-sm">{technology.name}</p>
		</div>
	);
}
