import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ChangeFirstNameScreen,
 ChangeLastNameScreen, SettingsScreen} from "../../screens/Settings";

import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function SettingsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeFirstnameScreen}
        component={ChangeFirstNameScreen}
        options={{
          title: "Cambiar nombre",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeLastnameScreen}
        component={ChangeLastNameScreen}
        options={{
          title: "Cambiar apellidos",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}