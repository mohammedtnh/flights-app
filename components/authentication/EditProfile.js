import React, { useEffect } from "react";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../store/actions/authActions";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EditProfile = ({ navigation, user }) => {
  const { handleSubmit, control, errors, setValue } = useForm();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("phoneNumber", user.phoneNumber);
  };

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data = { ...data, id: user.id };
    dispatch(userUpdate(data, navigation));
  };

  //   const [isAirline, setAirline] = useState(false);

  //   const toggleAirline = () => {
  //     setAirline((prev) => !prev);
  //   };

  return (
    <View style={styles.container}>
      {/* <Button>Reload</Button> */}
      <Controller
        defaultValue=""
        name="username"
        control={control}
        rules={{
          required: { value: true, message: "Username is required" },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="Username"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.username}
            errorText={errors?.username?.message}
          />
        )}
      />
      <Controller
        defaultValue=""
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Email is required" },
          pattern: {
            value: EMAIL_REGEX,
            message: "Not a valid email",
          },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.email}
            errorText={errors?.email?.message}
          />
        )}
      />
      <Controller
        defaultValue=""
        name="firstName"
        control={control}
        rules={{
          required: { value: true, message: "First Name is required" },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="First Name"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.firstName}
            errorText={errors?.firstName?.message}
          />
        )}
      />
      <Controller
        defaultValue=""
        name="lastName"
        control={control}
        rules={{
          required: { value: true, message: "Last Name is required" },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="Last Name"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.lastName}
            errorText={errors?.lastName?.message}
          />
        )}
      />
      <Controller
        defaultValue=""
        name="phoneNumber"
        control={control}
        rules={{
          required: { value: true, message: "Phone Number is required" },
          minLength: {
            value: 8,
            message: "Password should be between 8-12 characters",
          },
          maxLength: {
            value: 10,
            message: "Password should be between 8-12 characters",
          },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="Phone Number"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.phoneNumber}
            errorText={errors?.phoneNumber?.message}
          />
        )}
      />
      {/* <View style={styles.switch}>
        <Text style={styles.switchText}>Airline?</Text>
        <Switch
          trackColor={{ false: color.gray200, true: color.green600 }}
          thumbColor={color.gray100}
          ios_backgroundColor={color.gray800}
          onValueChange={toggleAirline}
          value={isAirline}
        />
      </View> */}
      <Button onPress={handleSubmit(onSubmit)} label="Save Changes" />
    </View>
  );
};

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800],
};

export default EditProfile;
