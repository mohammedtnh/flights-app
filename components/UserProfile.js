import { List, ListItem, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import EditProfile from "./authentication/EditProfile";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <ListItem>
      <EditProfile user={user} />
    </ListItem>
  );
};
export default UserProfile;
