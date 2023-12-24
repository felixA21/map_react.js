import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the best famous skyscrapper",
    address: "20 w 34th, 1001 NY",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    location: {
      lat: 40,
      lng: -73
    },
    creator: "u1"
  },

  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the best famous skyscrapper",
    address: "20 w 34th, 1001 NY",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    location: {
      lat: 40,
      lng: -73
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};
export default UserPlaces;
