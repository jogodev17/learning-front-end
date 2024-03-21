import React, { useState } from "react";

const Form = () => {
    const initialState = {
        name: "default name",
        artwork: {
            title: "default title",
            city: "default city",
            image: "https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-part-1/128/ic_user_image_no-512.png", // default image when there's n image from user
        },
    };

    const [user, setUser] = useState(initialState);

    console.log('User: ', user);
    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        // check if the inputs has value if not then set the initial state (default value)
        if (value === '') {
          setUser(initialState);
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
            artwork: {
              ...prevUser.artwork,
              [name]: value
            }
        }));
        }
    };

    return (
        <form className="flex flex-col gap-4 pt-5 pb-8 px-5">
            {/* labels/inputs */}
            <div>
                <label className="text-md font-semibold">Name: </label>
                <input type="text" name="name" onChange={handleInputChange} className="border-[2px] rounded-md ml-2" />
            </div>

            {/* labels/inputs */}
            <div>
                <label className="text-md font-semibold">Title: </label>
                <input type="text" name="title" onChange={handleInputChange} className="border-[2px] rounded-md ml-2" />
            </div>

            {/* labels/inputs */}
            <div>
                <label className="text-md font-semibold">City: </label>
                <input type="text" name="city" onChange={handleInputChange} className="border-[2px] rounded-md ml-2" />
            </div>

            {/* labels/inputs */}
            <div>
                <label className="text-md font-semibold">Image: </label>
                <input type="text" name="image" onChange={handleInputChange} className="border-[2px] rounded-md ml-2" />
            </div>

            {/* all inputs goes here */}
            <div className="font-semibold border-2 rounded-xl shadow-xl py-4 px-6 my-5">
                <h3 className="text-xl">Name: {user.name}</h3>
                <h3 className="text-xl">Title: {user.artwork.title}</h3>
                <h3 className="text-xl">City: {user.artwork.city}</h3>
            </div>

            {/* for image */}
            <div>
                <img
                  src={user.artwork.image}
                  alt={user.name}
                />
            </div>
        </form>
    );
};

export default Form;
