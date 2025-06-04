import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import TabRoutes from "./src/routes/TabRoutes";


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </PaperProvider>

  );
}


