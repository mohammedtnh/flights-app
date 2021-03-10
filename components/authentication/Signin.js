import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { t } from "react-native-tailwindcss";
import { useForm, Controller } from "react-hook-form";

// Components
import Input from "../Form/Input";
import Button from "../Form/Button";

// Actions
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const { handleSubmit, control, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signin(data, navigation));
  };

  return (
    <View style={styles.container}>
      <Controller
        defaultValue=""
        name="username"
        control={control}
        rules={{
          required: { value: true, message: "Fill in Username" },
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
        name="password"
        control={control}
        rules={{
          required: { value: true, message: "Fill in Password" },
        }}
        render={({ onChange, value }) => (
          <Input
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.password}
            errorText={errors?.password?.message}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Signin" />

      <Button
        onPress={() => navigation.navigate("Signup")}
        label="Create an Account"
      />
    </View>
  );
};

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800],
};

// REVIEW: Move styles to their own file
export default Signin;
