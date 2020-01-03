import React from 'react';
import { Button, View, Text } from "react-native";
import { Props } from './PreloginContainer';


const PreloginScreen: React.FC<Props> = props => {

    console.log(props);
    return (
        <View>
            <Text>
                Grande Corvino!!!
        </Text>
            <Button onPress={() => props.onGetPreloginClick({abi: '03104', canale: 'desktop'})}
                title="asd"></Button>

        </View>
    )

}

export default PreloginScreen