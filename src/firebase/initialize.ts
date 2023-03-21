import { getApp, getApps, initializeApp } from "firebase/app";

import config from "./config";

const initialize = () => {
  const apps = getApps();
  if (apps.length === 0) {
    const app = initializeApp(config);
    if (import.meta.env.DEV) {
      console.info(`🔥 Firebase app initialized!`);
    }
    return app;
  }
  const app = getApp();
  return app;
};

export default initialize;
