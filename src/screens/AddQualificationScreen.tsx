import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../context/AppContext";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const AddQualificationScreen = () => {
  const navigation = useNavigation();
  const { addQualification } = useAppContext();

  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const handleSave = () => {
    if (!degree || !institution || !duration) {
      alert(
        "Please fill in all required fields (Degree, Institution, Duration)"
      );
      return;
    }

    const qualification = {
      degree,
      institution,
      duration,
      description: description || undefined,
    };
    addQualification(qualification);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#007AFF" />
      <Animated.View style={styles.header}>
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
          Add Qualification
        </Text>
        <View style={{ width: 24 }} />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(500).delay(200)}
        style={styles.formContainer}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Degree *</Text>
          <TextInput
            style={styles.input}
            value={degree}
            onChangeText={setDegree}
            placeholder="enter skill name"
            placeholderTextColor={"#999"}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Institution *</Text>
          <TextInput
            style={styles.input}
            value={institution}
            onChangeText={setInstitution}
            placeholder="e.g Expert, Intermediate"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Duration *</Text>
          <TextInput
            style={styles.input}
            value={duration}
            onChangeText={setDuration}
            placeholder="e.g Expert, Intermediate"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description *</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="e.g Expert, Intermediate"
            placeholderTextColor={"#999"}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AddQualificationScreen;

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
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
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
    padding: 15,
    fontSize: 16,
    color: "#333",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 6,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
