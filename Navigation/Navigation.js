import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardScreen from '../Pages/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../Pages/CartScreen';
import Signup from '../Pages/Signup';
import HomeScreen from '../Pages/HomeScreen';
import OnboardScreen from '../Pages/OnboardScreen';
import FormScreen from '../Pages/FormScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="SignUp" component={Signup} 
                options={{headerShown:false}}
            /> */}
                <Stack.Screen name="FormScreen" component={FormScreen} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="Onboard" component={OnboardScreen} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CardScreen" component={CardScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    )
};