import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my-site-monitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
