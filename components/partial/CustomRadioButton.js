import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text  } from 'react-native';

export default class CustomRadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View style={{marginTop: 10}}>
                
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.rbWrapper}>
							<TouchableOpacity
								style={styles.rbStyle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selected} />}
							</TouchableOpacity>
                            <Text style={styles.textStyle}>{res.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rbWrapper: {
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: 'row',
	},
    textStyle: {
        marginLeft: 20,
        fontSize: 15,
        color: '#444',
        fontWeight: '400'
    },
	rbStyle: {
		height: 18,
		width: 18,
		borderRadius: 110,
		borderWidth: 2,
		borderColor: '#2750aa',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selected: {
		width: 8,
		height: 8,
		borderRadius: 55,
		backgroundColor: '#2196F3',
    },
    result: {
        marginTop: 22,
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'blue',
    },
});