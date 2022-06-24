import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style='auto' backgroundColor='#ad6200'/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerStyle: { backgroundColor: '#e37d00'},
            headerTintColor: '#fff'
          }}>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              title: 'Login',
              headerTitleStyle: {fontWeight: 'bold', textAlign: 'center'}
            }}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{title: 'Cadastre-se'}}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ navigation }) => ({
              title: 'Home',
              headerRight: () => (
                <Button
                  onPress={() =>{
                    Alert.alert(
                      'Atenção!',
                      'Desej sair do aplicativo',
                      [
                        {
                          text: 'Sim',
                          onPress: () => navigation.replace('Login'),
                        },
                        {
                          text:'Não',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel'
                        }
                      ],
                      {cancelable: false}
                    )
                  }}
                  title='Sair'
                  style={{ padding: 80}}
                  color="d26900"
                />
              ),
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' }
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
