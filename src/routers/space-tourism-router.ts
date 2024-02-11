import express from "express";
import getDestinationController from "../controllers/getDestinationController.js";
import getCrewController from "../controllers/getCrewController.js";

const spaceRouter = express.Router();

spaceRouter.get("/destinations/:name", getDestinationController);
spaceRouter.get("/crews/:name", getCrewController);

export default spaceRouter;
