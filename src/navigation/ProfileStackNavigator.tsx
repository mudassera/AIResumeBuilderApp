import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddAwardScholarshipScreen from "../screens/AddAwardScholarshipScreen";
import AddExeperienceScreen from "../screens/AddExeperienceScreen";
import AddHobbyScreen from "../screens/AddHobbyScreen";
import AddLanguageScreen from "../screens/AddLanguageScreen";
import AddProjectScreen from "../screens/AddProjectScreen";
import AddQualificationScreen from "../screens/AddQualificationScreen";
import AddSkillScreen from "../screens/AddSkillScreen";
import AwardsScholarshipsScreen from "../screens/AwardsScholarshipsScreen";
import CertificatesScreen from "../screens/CertificatesScreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import HobbiesInterestsScreen from "../screens/HobbiesInterestsScreen";
import LanguagesScreen from "../screens/LanguagesScreen";
import ObjectiveScreen from "../screens/ObjectiveScreen";
import OrganisationsScreen from "../screens/OrganisationsScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import QualificationsScreen from "../screens/QualificationsScreen";
import SkillsScreen from "../screens/SkillsScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PersonalDetails"
      component={PersonalDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Objective"
      component={ObjectiveScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Experience"
      component={ExperienceScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Qualifications"
      component={QualificationsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Organizations"
      component={OrganisationsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Projects"
      component={ProjectsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Certificates"
      component={CertificatesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AwardsScholarships"
      component={AwardsScholarshipsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Skills"
      component={SkillsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Languages"
      component={LanguagesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HobbiesInterests"
      component={HobbiesInterestsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddExperience"
      component={AddExeperienceScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddProject"
      component={AddProjectScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddSkill"
      component={AddSkillScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddHobby"
      component={AddHobbyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddQualification"
      component={AddQualificationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddLanguage"
      component={AddLanguageScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="AddAwardScholarship"
      component={AddAwardScholarshipScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ProfileStackNavigator;
