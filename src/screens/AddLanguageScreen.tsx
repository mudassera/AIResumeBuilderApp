import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../context/AppContext";

const AddLanguageScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");
  const {addLanguage} = useAppContext();
  const handleSave = () => {
    if (!language || !proficiency) {
      alert("Please fill in the req details (language, proficiency)");
      return;
    }

    const languageData = {
        language,
        proficiency
    };
    addLanguage(languageData);
    navigation.goBack();

  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#007AFF" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ paddingTop: 20 }}
            name="arrow-back"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 20,
            color: "white",
            fontWeight: "600",
            fontSize: 17,
          }}
        >
          Add Language
        </Text>

        <TouchableOpacity onPress={handleSave}>
          <Ionicons
            style={{ paddingTop: 20 }}
            name="checkmark"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Language *</Text>
        <TextInput
          style={styles.input}
          value={language}
          onChangeText={setLanguage}
          placeholder="e.g, English"
          placeholderTextColor={"#999"}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Proficieny *</Text>
        <TextInput
          style={styles.input}
          value={proficiency}
          onChangeText={setProficiency}
          placeholder="e.g Native, Fluent, Intermediate"
          placeholderTextColor={"#999"}
        />
      </View>
    </View>
  );
};

export default AddLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 40,
    backgroundColor: "#007AFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
