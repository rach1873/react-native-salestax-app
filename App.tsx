import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-orange-400">
      <TouchableOpacity className="absolute self-center bottom-12 w-24 h-24 border border-black rounded-full bg-blue-500"></TouchableOpacity>
    </SafeAreaView>
  );
}
