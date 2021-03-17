import React from "react";
import { ListItem } from "native-base";
import { useSelector } from "react-redux";

import EditProfile from "./EditProfile";

const UserProfile = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <ListItem>
      <EditProfile user={user} navigation={navigation} />
    </ListItem>
  );
};
export default UserProfile;
