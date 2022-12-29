import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420 , width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <View style={{
            width,
            height,
            marginHorizontal: 7
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 16,

    }
});