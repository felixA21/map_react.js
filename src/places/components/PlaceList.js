import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElement/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          address={place.address}
          creatorID={place.creatorId}
          coordinates={place.location}
          description={place.description}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
