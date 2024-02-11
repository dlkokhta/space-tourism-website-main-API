import Crew from "../models/crewSchema.js";
import { Request, Response } from "express";

const getCrewController = async (req: Request, res: Response) => {
  const { name } = req.params;
  console.log(name);

  try {
    const destination = await Crew.findOne({ name: name });
    console.log("destination", destination);
    res.send(destination);
  } catch (error) {
    console.log(error);
  }
};

export default getCrewController;
