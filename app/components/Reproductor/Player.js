import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

const Player = () => {
	const video = useRef(null);
	const [status, setStatus] = useState(null);

	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={{
					uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
				}}
				useNative
				resizeMode="contain"
				isLooping
				onPlaybackStatusUpdate={setStatus}
			/>
			<View style={styles.buttons}>
				<Button
					title="Play"
					onPress={() => video.current.playFromPositionAsync(5000)}
				/>
				<Button title="Pause" onPress={() => video.current.pauseAsync()} />
				<Button title="Stop" onPress={() => video.current.stopAsync()} />
				<Button title="Seek" onPress={() => video.current.seekAsync(5000)} />
				<Button
					title="Mute"
					onPress={() => video.current.setIsMutedAsync(true)}
				/>
				<Button
					title="Unmute"
					onPress={() => video.current.setIsMutedAsync(false)}
				/>
				<Button
					title="Fullscreen"
					onPress={() => video.current.presentFullscreenPlayer()}
				/>
				<Button
					title="Exit Fullscreen"
					onPress={() => video.current.dismissFullscreenPlayer()}
				/>
				<Button title="Status" onPress={() => console.log(status)} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	video: {
		flex: 1,
		alignSelf: "scretch",
	},
});

export default Player;
