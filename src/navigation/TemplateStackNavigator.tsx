import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TemplatePreviewScreen from "../screens/TemplatePreviewScreen";
import TemplateScreen from "../screens/TemplateScreen";

const Stack = createNativeStackNavigator();

const TemplateStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Templates"
        component={TemplateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TemplatePreview"
        component={TemplatePreviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TemplateStackNavigator;
