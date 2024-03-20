import { LinkIcon } from "@heroicons/react/24/solid";
import React from "react";

const LinkToSocialAccount = ({ social }) => {
	return (
		<a
			className="flex flex-row gap-4"
			href={social.facebook}
			target="_blank"
		>
			<LinkIcon className="h-6 w-6 text-blue-500" />
			<span className="text-base text-blue-400 font-bold underline">
				Go to {social.label} Profile
			</span>
		</a>
	);
};

export default LinkToSocialAccount;
