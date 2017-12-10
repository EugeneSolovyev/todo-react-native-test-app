import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import moment from 'moment';

import Note from './Note';

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			noteArray: [],
			noteText: '',
		};
	}

	addNote() {
		if (this.state.noteText.length) {
			let date = new Date();
			this.state.noteArray.push({
				date: moment(date).format('DD MMMM YYYY'),
				note: this.state.noteText,

			});
			this.setState({ noteArray: this.state.noteArray })
			this.setState({noteText: ''})
		}
	}

	deleteNote(key) {
		this.state.noteArray.splice(key, 1);
		this.setState({
			noteArray: this.state.noteArray
		})
	}

	render() {

		let notes = this.state.noteArray.map((val, key) => {
			return <Note key={key}
						 keyval={key}
						 val={val}
						 deleteMethod={() => this.deleteNote(key)}/>
		});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>TO DO</Text>
				</View>

				<ScrollView style={styles.scrollContainer}>
					{notes}
				</ScrollView>

				<View style={styles.footer}>
					<TextInput
						style={styles.textInput}
						value={this.state.noteText}
						onChangeText={(noteText) => this.setState({noteText})}
						placeholder='Add Note'
						placeholderTextColor='white'
						underlineColorAndroid='transparent'
					/>
				</View>

				<TouchableOpacity onPress={this.addNote.bind(this)}
								  style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: 'rgba(44, 62, 80,1.0)',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: '#ddd'
	},
	headerText: {
		color: '#fff',
		fontSize: 18,
		padding: 26
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	textInput: {
		alignSelf: 'stretch',
		color: '#fff',
		padding: 20,
		backgroundColor: 'rgba(44, 62, 80,1.0)',
		borderTopWidth: 2,
		borderTopColor: '#ededed'
	},
	addButton: {
		position: 'absolute',
		zIndex: 11,
		right: 20,
		bottom: 90,
		backgroundColor: 'rgba(46, 204, 113,1.0)',
		width: 90,
		height: 90,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
	},
	addButtonText: {
		color: '#fff',
		fontSize: 24
	}
});
