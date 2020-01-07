import React from 'react';
import { Button, View, Text } from "react-native";
import { Props } from './PreloginContainer';


const PreloginScreen: React.FC<Props> = props => {

    console.log('props', props);
    return (
        <View>
            <Text>
                Premi il pulsante seguente e io farò una chiamata rest per recuperare il nome della tua banca
            </Text>
            <Button
                onPress={() => props.onGetPreloginClick({ abi: '06045', canale: 'desktop' })}
                title="Pulsante seguente" />
            <Text>
                {
                    props.preloginData.codiceGruppo && (
                        <Text>
                            Banca: {props.preloginData.codiceGruppo}
                        </Text>
                    )
                }
            </Text>

        </View>
    )

}

export default PreloginScreen