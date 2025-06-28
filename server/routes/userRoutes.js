import express from "express";
import { checkAuth, login, signup, updateProfile } from "../controllers/userControllers";
import { protectRoute } from "../middleware/auth";


const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.put("/check", protectRoute, checkAuth);

export default userRouter;