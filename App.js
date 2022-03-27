import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
	const handlePress = () => console.log("Text pressed");


	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				QR-garden in dev, un texte vraiment vraiment long mais genrevraiment de chez vraiment
				</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'dodgerblue',

	},
});
