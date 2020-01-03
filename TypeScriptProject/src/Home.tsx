import React from 'react';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { Button } from 'react-native';

// export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
    };

    n = (page, params) => {
        console.log('page', page);
        console.log('params', params);
        console.log('this.props.navigation', this.props.navigation);
        this.props.navigation.navigate(page, params);
    }

    render() {
        const { navigation } = this.props;
        console.log("navigation.getParam('name')", navigation.getParam('name'));
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => this.n('Profile', { name: 'Jane' })}
            />
        );
    }
}

export default HomeScreen