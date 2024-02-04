import { config as dotenvConfig } from "dotenv";
import { app } from "./app.js";

dotenvConfig();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Express App is Listening on port :>> ", port);
});
