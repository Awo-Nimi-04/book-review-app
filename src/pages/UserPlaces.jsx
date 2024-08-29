import React from "react";
import { useParams } from "react-router-dom";
const UserPlaces = () => {
  const { uid } = useParams();
  return <div>These are the places of user {uid}</div>;
};

export default UserPlaces;
