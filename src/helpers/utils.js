import mongoose from "mongoose";
import { BadRequestError } from "../errors/CustomError.js"; 

const validateObjectId = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestError("Invalid id");
    }
}


export {
    validateObjectId
}