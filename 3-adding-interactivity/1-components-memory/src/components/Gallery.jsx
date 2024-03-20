import React, { useState } from "react";
import { sculptureList } from "../lib/data";

const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);
    // checks if there's next item in the sculptureList
    const hasNextItem = index < sculptureList.length - 1;
    // function for next item
    const handleNextItem = () => {
        if (hasNextItem) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    // function for dropdown
    const handleDropDown = () => {
        // TODO:
        // - handle dropdown
        setToggle(!toggle);
    };

    // currentItem
    let { name, artist, description, url, alt } = sculptureList[index];

    return (
        // gallery component
        <div className="w-[300px] p-6 rounded-xl shadow-2xl flex justify-start items-start flex-col gap-2">
            {/* button for next item */}
            <button
                className="w-full py-2 px-6 bg-slate-500 text-white rounded-md shadow-md"
                onClick={handleNextItem}
            >
                Next
            </button>
            {/* h2 with <i>{name}</i> by {artist} */}
            <h2>
                <i className="font-semibold">{name}</i> by {artist}
            </h2>

            {/* <h3>1 of 13 (length of the items)</h3> */}
            <h3 className="py-1 px-2 bg-slate-400 text-white font-semibold rounded-xl">{index+1} of {sculptureList.length}</h3>
            {/* button for toggle description */}
            <button onClick={handleDropDown} className="mt-6 w-full py-2 px-6 bg-slate-500 text-white rounded-md shadow-md">
                {toggle? "Hide Description" : "Show Description"}
            </button>
            {/* <p>{description}</p> */}
            {toggle ? (
                <p className="mt-2 text-base antialiased">{description}</p>
            ): <p>{description.slice(0, 15).concat('...')}</p>}
            {/* img with src={url} alt={alt} */}
            <img className="mt-4 rounded-sm" src={url} alt={alt} />
        </div>
    );
};

export default Gallery;
