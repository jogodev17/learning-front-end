import React, { useState } from "react";

const BucketList = () => {
    const initialList = [
        { id: 0, title: "Big Bellies", seen: false },
        { id: 1, title: "Lunar Landscape", seen: false },
        { id: 2, title: "Terracotta Army", seen: true },
    ];

    const [list, setList] = useState(initialList);

    const handleToggle = (artworkId, nextSeen) => {
        setList(prevList => (
            prevList.map(artwork =>
                artwork.id === artworkId ? 
                { ...artwork, seen: nextSeen} :
                artwork)
        ))
    }

    return (
        <div>
            <h1>Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={list} onToggle={handleToggle} />
        </div>
    );
};

const ItemList = ({artworks, onToggle}) => {

    return (
        <ul>
            {artworks.map(artwork => (
                <ListItem key={artwork.id} artwork={artwork} onToggle={onToggle} />
            ))}
        </ul>
    )
}

const ListItem = ({artwork, onToggle}) => {
    const {id, title, seen} = artwork;
    return (
        <li>
            <input 
            type="checkbox" 
            checked={seen}
            onChange={() => onToggle(id, !seen)}
            />
            <span>{title}</span>
        </li>
    )
}

export default BucketList;
