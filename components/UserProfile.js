import { ListItem } from "native-base";
import React from "react";
import EditProfile from "./authentication/EditProfile";
import { useSelector } from "react-redux";

const UserProfile = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <ListItem>
      <EditProfile user={user} navigation={navigation} />
    </ListItem>
  );
};
export default UserProfile;
