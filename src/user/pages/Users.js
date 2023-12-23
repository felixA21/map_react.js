import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "Max",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432582.png&w=350&h=254",
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
