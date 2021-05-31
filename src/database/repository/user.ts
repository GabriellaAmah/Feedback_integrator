import { userData } from "../../controllers/user/createUser";
import ErrorResponse from "../../utils/errorResponse";
import { UserModel } from "../models/User";

class UserDb {
    static async saveUser({name, password, email, category} : userData){
        let newUser = new UserModel({name, password, email, category})
        let savedUser =  await newUser.save()
        if(!savedUser) return new ErrorResponse('could not saved user', 422)

        return savedUser
    }

    static async emailExist(email : string) {
        let emailExist = await UserModel.findOne({email})
        if(emailExist) return new ErrorResponse('User with this email exist', 422)
        return false
    }
}

export default UserDb