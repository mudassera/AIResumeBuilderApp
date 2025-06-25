import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ResumeFormScreen from "../screens/ResumeFormScreen";
import ResumePreviewScreen from "../screens/ResumePreviewScreen";
import TemplateSelectionScreen from "../screens/TemplateSelectionScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="ResumeForm"
      component={ResumeFormScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TemplateSelection"
      component={TemplateSelectionScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ResumePreview"
      component={ResumePreviewScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;
