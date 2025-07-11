import { useEffect } from 'react'; // Importing React for useEffect hook
import { Stack } from 'expo-router'; // Importing Stack from expo-router
import { StatusBar } from 'expo-status-bar'; // Importing StatusBar from expo-status-bar

export default function RootLayout() { // Defining the RootLayout component

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name ="tabs" options ={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name ="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='auto' />
      </>
  );
}
