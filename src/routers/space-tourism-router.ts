import express from "express";
import getDestinationController from "../controllers/getDestinationController.js";

const spaceRouter = express.Router();

spaceRouter.get("/destinations/:name", getDestinationController);

export default spaceRouter;
