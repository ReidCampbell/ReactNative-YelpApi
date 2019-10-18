import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text styles={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default ResultsList;
