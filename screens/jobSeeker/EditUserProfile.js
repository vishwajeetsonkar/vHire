import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppBarComponent from "../../components/appBarComponent";
import { ScrollView } from "react-native-gesture-handler";

export class EditUserProfile extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            address: "",
            description: ""
        }
    }

    async fetchDetails() {

    }

    componentWillMount() {

    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
                <ScrollView>
                    <AppBarComponent title="Edit Details" navigation={navigation} />
                    <View style={styles.form}>
                        <TextInput style={styles.text}
                            label='First Name'
                            value={this.state.firstName}
                            onChangeText={firstName => this.setState({ firstName })}
                        />
                        <TextInput style={styles.text}
                            label='Last Name'
                            value={this.state.lastName}
                            onChangeText={lastName => this.setState({ lastName })}
                        />
                        <TextInput style={styles.text}
                            label='Email'
                            value={this.state.email}
                            disabled={true}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput style={styles.text}
                            label='Mobile No.'
                            value={this.state.mobile}
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={mobile => this.setState({ mobile })}
                        />
                        <TextInput style={styles.text}
                            label='Description'
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })}
                        />
                        <Button style={styles.text}
                            mode="contained"
                            onPress={() => console.log('Pressed')}>
                            Submit
                </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        margin: 10
    },
    text: {
        margin: 10
    }
})