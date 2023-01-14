import React from 'react';
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}



export const MovieDetails = ({ movieFull, cast }: Props) => {

    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' color="grey" size={16} />
                    <Text style={{ marginLeft: 5 }}>{movieFull.vote_average.toFixed(2)}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>
                {/* Historia */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text>
                    {movieFull.overview}
                </Text>
                {/* Prespuesto */}
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={ true }
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}

                />
            </View>
        </>
    )
}
