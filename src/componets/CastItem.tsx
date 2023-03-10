import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri: uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,

        elevation: 10,
        marginHorizontal: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    }
});