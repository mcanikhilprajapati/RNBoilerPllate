
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigation from "./src/navigation/AppNavigation.tsx";

function App() {

  return (
    <SafeAreaProvider>
        <AppNavigation />
    </SafeAreaProvider>
  );
}


export default App;
