import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { HomeDetail } from '@screens/HomeDetail';
import { NewMeal } from '@screens/NewMeal';
import { ConfirmationMeal } from '@screens/ConfirmationMeal';
import { ViewMeal } from '@screens/ViewMeal';

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

      <Screen
        name='confirmation'
        component={ConfirmationMeal}
      />

      <Screen
        name='viewMeal'
        component={ViewMeal}
      />

    </Navigator>
  )
}