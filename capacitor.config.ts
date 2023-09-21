import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appcopy.app',
  appName: 'appandroidcopy',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
