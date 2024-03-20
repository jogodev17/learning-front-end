import React from "react";
import LinkToSocialAccount from "./LinkToSocialAccount";

const UserProfile = ({ user, social }) => {

	return (
		// UserProfile
		<div className="w-[300px] rounded-md shadow-md flex flex-col gap-6 justify-start items-start py-4 px-6 pb-8">
			<div className="w-full">
				<img
					className="w-full h-[300px] object-fill rounded-sm"
					width={200}
					src={user.profilePicture}
					alt={user.name}
				/>
			</div>
			<div>
				<h3 className="text-xl">{user.name}</h3>
				<p className="text-md italic text-slate-500">{user.bio}</p>
			</div>
      <div>
        <LinkToSocialAccount social={social} label='Facebook' />
      </div>
		</div>
	);
};

export default UserProfile;
