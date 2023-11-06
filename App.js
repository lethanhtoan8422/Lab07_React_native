import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import TodoList from './src/screens/TodoList';
import AddJob from './src/screens/AddJob';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={({route}) => ({
        headerShown : false
      })}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='TodoList' component={TodoList} 
        initialParams={{name : '', job : {job : '', isChecked : false}}}/>
        <Stack.Screen name='AddJob' component={AddJob}
        initialParams={{job : '', isUpdate : false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
