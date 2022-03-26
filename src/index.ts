import app from "./app";

// database connection
import "./database";

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
