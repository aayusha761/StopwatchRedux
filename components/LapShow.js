import {ScrollView, Text, View} from 'react-native';
import React from 'react';

const Lap = (props) => {
    const {timeCaptured} = props;

    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {
                timeCaptured.map((lap, index) => {
                    return (
                        <View key={index}>
                            <Text>{lap}</Text>
                        </View>
                    );
                })
            }
        </ScrollView>
    )
};

export default Lap;
