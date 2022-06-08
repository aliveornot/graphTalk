import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from '../../screens/TabOneScreen/';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName='TabOne'>
            <BottomTab.Screen name='TabOne' component={TabOneScreen} options={{ headerShown: false }} />
        </BottomTab.Navigator>
    );
}
