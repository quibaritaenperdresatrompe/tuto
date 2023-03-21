import buildConfig from "../utils/buildConfig";

const config = buildConfig(
  [
    "apiKey",
    "appId",
    "authDomain",
    "messagingSenderId",
    "projectId",
    "storageBucket",
  ],
  { prefix: "FIREBASE" }
);

export default config;
