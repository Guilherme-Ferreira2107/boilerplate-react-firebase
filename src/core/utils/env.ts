export const env = {
  isDev: process.env.NODE_ENV === "development",
  isTest: process.env.NODE_ENV === "test",
  isProd: process.env.NODE_ENV === "production",
  url: process.env.REACT_APP_URL,
  ws: process.env.REACT_APP_WS || "",
};
