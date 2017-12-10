import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
	render() {
		return (
			<View key={this.props.keyval} style={styles.note}>
				<Text style={styles.noteText}>{this.props.val.date}</Text>
				<Text style={styles.noteDate}>{this.props.val.note}</Text>

				<TouchableOpacity
					onPress={this.props.deleteMethod}
					style={styles.noteDelete}
				>
					<Text style={styles.noteDeleteText}>Delete</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	note: {
		position: 'relative',
		padding: 20,
		paddingRight: 100,
		borderBottomWidth: 2,
		borderBottomColor: '#ededed',
	},
	noteDate: {
		paddingLeft: 20,
		borderLeftWidth: 10,
		borderLeftColor: 'rgba(44, 62, 80,1.0)'
	},
	noteDelete: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(44, 62, 80,1.0)',
		padding: 10,
		top: 10,
		bottom: 10,
		right: 10
	},
	noteText: {
		paddingLeft: 20,
		borderLeftWidth: 10,
		borderLeftColor: 'rgba(44, 62, 80,1.0)'
	},
	noteDeleteText: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(44, 62, 80,1.0)',
		padding: 10,
		top: 10,
		bottom: 10,
		right: 10,
	},
	noteDeleteText: {
		color: '#fff'
	}
});
