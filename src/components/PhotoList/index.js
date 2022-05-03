import React, { useState } from "react";
// import Modal from "../Modal";
// import photo from '../../assets/small/commercial/0.jpg';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: "grocery aisle",
            category: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "grocery booth",
            category: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "building exterior",
            category: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "restaurant table",
            category: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "cafe interior",
            category: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "green parrot",
            category: "portraits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "yellow macaw",
            category: "portraits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "pug smile",
            category: "portraits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "pancakes",
            category: "food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "burrito",
            category: "food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "scallop pasta",
            category: "food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "burger",
            category: "food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "fruit bowl",
            category: "food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "green river",
            category: "landscape",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "docks",
            category: "landscape",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "panoramic village by sea",
            category: "landscape",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "domestic landscape",
            category: "landscape",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
        {
            name: "park bench",
            category: "landscape",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"
        },
    ]);

    // finding every photo in Photos[] that matches user-selected category
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
      <div>
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default PhotoList;