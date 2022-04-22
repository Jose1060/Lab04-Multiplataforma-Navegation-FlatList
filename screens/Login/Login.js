import React, { useState } from "react";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const usuarioPrueba = {
	user: "admin",
	pass: "admin",
};

const Login = ({ navigation }) => {
	const [text, setText] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState("");

	const ConfirmLogin = ({ user, pass }) => {
		console.log("user: ", user, "pass: ", pass);
		if (user === usuarioPrueba.user && pass === usuarioPrueba.pass) {
			navigation.navigate("App", {
				user: user,
				pass: pass,
			});
			setText("");
			setPass("");
		} else {
			setError("Usuario o contraseña incorrectos");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.loginContainer}>
				<Text style={styles.text}>Login</Text>
				<Image
					style={styles.logo}
					source={{
						uri: "https://images-ext-1.discordapp.net/external/iGYsRDFFAYfK47weCFiTkRJJAiSzbjIGgMeJ_SyWnoE/%3F_nc_cat%3D106%26ccb%3D1-5%26_nc_sid%3D09cbfe%26_nc_ohc%3DoChNNpHeXL8AX8kiHAW%26_nc_pt%3D1%26_nc_ht%3Dscontent.faqp3-1.fna%26oh%3D00_AT_GEeFirNqp3f3hRZ6sJM28pyWDDPLp-6kzJMwKeDNpvA%26oe%3D626D1E1B/https/scontent.faqp3-1.fna.fbcdn.net/v/t1.18169-9/225255_582998048419311_1142575426_n.jpg?width=468&height=468",
					}}
				/>
				<TextInput
					style={{
						height: 40,
						borderColor: "blue",
						borderRadius: "10px",
						padding: "5px",
						margin: "10px",
						borderWidth: "1px",
					}}
					placeholder="Usuario"
					onChangeText={(text) => setText(text)}
					value={text}
				/>

				<TextInput
					style={{
						height: 40,
						borderColor: "blue",
						borderRadius: "10px",
						padding: "5px",
						margin: "10px",
						borderWidth: "1px",
					}}
					placeholder="Contraseña"
					onChangeText={(pass) => setPass(pass)}
					secureTextEntry={true}
					value={pass}
				/>

				<Pressable
					onPress={() => {
						console.log("ConfirmLogin", text, pass);
						ConfirmLogin({ user: text, pass });
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
						},
						styles.wrapperCustom,
					]}>
					{({ pressed }) => (
						<Text style={styles.textBtn}>{pressed ? "Pressed!" : "Login"}</Text>
					)}
				</Pressable>
				<View>{error && <Text style={styles.textError}>{error}</Text>}</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textError: {
		color: "red",
		fontSize: "12px",
		margin: "10px",
	},
	wrapperCustom: {
		borderRadius: 8,
		padding: 6,
	},
	logBox: {
		padding: 20,
		margin: 10,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#f0f0f0",
		backgroundColor: "#f9f9f9",
	},
	logo: {
		width: 266,
		height: 158,
		alignSelf: "center",
	},
	text: {
		// Text styles
		fontFamily: "Helvetica",
		fontSize: 24,
		lineHeight: 10,
		fontWeight: "300",
		textAlign: "center",
		color: "white",
		// View styles
		backgroundColor: "#446594",
		borderRadius: 12,
		padding: 20,
		width: "60%",
		alignSelf: "center",
	},
	textBtn: {
		// Text styles
		fontFamily: "Helvetica",
		fontSize: 14,
		lineHeight: 30,
		fontWeight: "70",
		textAlign: "center",
		color: "white",
		// View styles
		backgroundColor: "black",
		borderRadius: 50,
		padding: 6,
		width: "100%",
		alignSelf: "center",
		margin: "10px",
	},
});

export default Login;
