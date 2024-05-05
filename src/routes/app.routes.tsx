import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { HomeDetail } from '@screens/Home/HomeDetail';
// import { NewGroup } from '@screens/Meal';
// import { Players } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      
    >
      <Screen
        name='home'
        component={Home}
        options={{
          animationTypeForReplace: 'pop'
        }}
      />

      <Screen
        name='homeDetail'
        component={HomeDetail}
        options={{
          animationTypeForReplace: 'pop'
        }}
      />

    </Navigator>
  )
}