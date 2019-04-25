import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';
import { Link } from './routing';
const Pokemon = props => {
    const backButton = (
        <View>
            <Link to="/">
                <Text>Go Back</Text>
            </Link>
        </View>
    );
    if (!props.selectedPokemon) {
        return (
            <View>
                {backButton}
                <Text>No Pokemon selected</Text>
            </View>
        );
    }
    const {
        selectedPokemon: { name, number, type, photoUrl }
    } = props;

    handlePress = () => {
        if (Platform.OS !== 'web') {
            Share.share({
                message: 'Check out my favorite Pokemon!',
                url: props.selectedPokemon.photoUrl
            })
        }
    };

    return (
        <View>
            <View>
                {backButton}
                <View>
                    <Text>{`#${number}`}</Text>
                </View>
                <View>
                    <Text>{`Name: ${name}`}</Text>
                </View>
                <View>
                    <Text>{`Type: ${type}`}</Text>
                </View>
                <View>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: photoUrl }} />
                </View>
                {Platform.OS !== 'web' &&
                    <View>
                        <Button title="Share" onPress={this.handlePress} />
                    </View>
                }
            </View>
        </View>
    );
};
export default Pokemon;