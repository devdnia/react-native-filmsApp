import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../componets/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../componets/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (

        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* <MoviePoster movie={ peliculasEnCine[0] }/> */}

                {/* Carousel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        vertical={false}
                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalSlider
                    movies={popular}
                    title="Populares"
                />
                <HorizontalSlider
                    movies={topRated}
                    title="Top Rated"
                />
                <HorizontalSlider
                    movies={upcoming}
                    title="Upcoming"
                />
            </View>
        </ScrollView>
    )
}
