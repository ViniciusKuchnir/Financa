import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function Login({navigation}) {
  const [username, setusername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Icon.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>Login</Text>
      <View style={[styles.input, styles.inputUsername]}>
        <Feather
          name="at-sign"
          style={styles.iconInput}
          size={24}
          color="#8305b4"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={setusername}
        />
      </View>

      <View style={styles.input}>
        <Feather
          name="lock"
          style={styles.iconInput}
          size={24}
          color="#8305b4"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword ? true : false}
        />
        {showPassword ? (
          <Feather
            name="eye"
            size={24}
            color="#8305b4"
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : (
          <Feather
            name="eye-off"
            size={24}
            color="#8305b4"
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.or}>OR</Text>

      <TouchableOpacity style={styles.google}>
        <AntDesign name="google" size={28} color="#8305b4" />
        <Text style={styles.googleText}>Login com Google</Text>
      </TouchableOpacity>

      <View style={styles.signup}>
        <Text style={styles.label}>Novo por aqui?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 200,
    height: 200,
  },
  text: {
    color: "#8305b4",
    fontWeight: "bold",
    fontSize: 38,
    letterSpacing: 2,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  inputUsername: {
    width: "85%",
  },
  iconInput: {
    marginRight: 10,
  },
  textInput: {
    width: "70%",
    height: 40,
    fontSize: 18,
  },
  forgotPassword: {
    width: "80%",
    marginBottom: 10,
  },
  forgotText: {
    color: "#8305b4",
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 48,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8305b4",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  or: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#808080",
  },
  google: {
    width: "80%",
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(131, 5, 180,0.3)",
    borderRadius: 10,
    marginBottom: 30,
  },
  googleText: {
    marginLeft: 18,
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(131, 5, 180, 1)",
  },
  signup: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
    color: '#808080'
  },
  link: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
    color: '#8305b4'
  },
});
