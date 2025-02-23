export const mfConfig = {
  name: "MF_Host",
  remotes: {
    "remoteAdmon": "MF_Admon@http://localhost:3001/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom", "react-router-dom", "react-router"], 
};
