
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigation from "./src/navigation/AppNavigation.tsx";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

function App() {

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
          <AppNavigation />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}


export default App;
