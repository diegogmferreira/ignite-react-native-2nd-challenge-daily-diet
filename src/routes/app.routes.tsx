import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { HomeDetail } from '@screens/Home/HomeDetail';
import { NewMeal } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none'
      }}

    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='homeDetail'
        component={HomeDetail}
      />

      <Screen
        name='newMeal'
        component={NewMeal}
      />

    </Navigator>
  )
}