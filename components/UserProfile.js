import { List, ListItem, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import EditProfile from "./authentication/EditProfile";

const UserProfile = () => {
  return (
    <ListItem>
      <EditProfile />
    </ListItem>
  );
};
export default UserProfile;
