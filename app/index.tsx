import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    background: images.wallone,
    vector: images.vectorone,
    caption: "Organize Your Tasks",
    description:
      "Keep your tasks organized by category, priority, or due date.",
  },
  {
    background: images.walltwo,
    vector: images.vectortwo,
    caption: "Collaborate with Others",
    description:
      "Invite friends or colleagues to collaborate on tasks and projects. Make yourself productive.",
  },
  {
    background: images.wallthree,
    vector: images.vectorthree,
    caption: "Congratulations!",
    description:
      "You're ready to start using 'PlanIt' to manage your tasks and stay organized.",
  },
];

const App = () => {
  const [progress, setProgress] = useState(0);
  const [progressList, setProgressList] = useState([true, false, false]);
  const [isOnboarding, setIsOnboarding] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const onboardingStatus = await AsyncStorage.getItem("isOnboarding");
      const loginStatus = await AsyncStorage.getItem("isLoggedIn");
      
      setIsOnboarding(onboardingStatus);
      setIsLoggedIn(loginStatus);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isOnboarding === "true") {
        if (isLoggedIn === "true") {
          router.replace("home");
        } else {
          router.replace("login");
        }
      }
    }
  }, [loading, isOnboarding, isLoggedIn, router]);

  const handlePress = async () => {
    if (progress < data.length - 1) {
      setProgress(progress + 1);
      setProgressList((prevState) => {
        const newState = [...prevState];
        newState[progress + 1] = true;
        newState[progress] = false;
        return newState;
      });
    } else {
      await AsyncStorage.setItem("isOnboarding", "true");
      router.push("login");
      setProgress(0);
      setProgressList([true, false, false]);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isOnboarding === null || isOnboarding === "false") {
    return (
      <View>
        <OnboardingLayout
          onboarding={data[progress]}
          progressList={progressList}
          handlePress={handlePress}
        />
        <StatusBar style="light" />
      </View>
    );
  }

  return null;
};

export default App;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
