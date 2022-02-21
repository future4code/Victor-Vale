import { app } from "./app";
import { getUserByName, getUserByType } from "./endpoints/getAllUsers";

app.get("/users", getUserByType)

