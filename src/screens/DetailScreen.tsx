import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity, Dimensions, Image, StyleSheet, View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../componets/MovieDetails';

const screenHight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetail(movie.id);

    console.log({ isLoading })

    return (

        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Botón para regresar */}

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color="white"
                    name="arrow-back-outline"
                    size={45}
                />
            </TouchableOpacity>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHight * 0.65,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 10,

    },
    posterImage: {
        flex: 1,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        opacity: 0.8
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 10,
    }
});


