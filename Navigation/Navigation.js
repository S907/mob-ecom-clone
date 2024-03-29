import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardScreen from '../Pages/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../Pages/CartScreen';
import Signup from '../Pages/Signup';
import HomeScreen from '../Pages/HomeScreen';
import OnboardScreen from '../Pages/OnboardScreen';
import FormScreen from '../Pages/FormScreen';
import DocumentPick from '../Pages/DocumentPick';
import SignPdf from '../Pages/SignPdf';
import OnboardScreenTwo from '../Pages/OnboardScreenTwo';
import ListAccordionScreen from '../Pages/ListAccordionScreen';
import PayList from '../Pages/PayList';


const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="SignUp" component={Signup} 
                options={{headerShown:false}}
            /> */}
                {/* <Stack.Screen name="DocumentPick" component={DocumentPick} 
                options={{headerShown:false}}
                /> */}
                <Stack.Screen name="OnboardScreenTwo" component={OnboardScreenTwo} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="PayList" component={PayList} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="ListAccordion" component={ListAccordionScreen} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="SignPdf" component={SignPdf} 
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