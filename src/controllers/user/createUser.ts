import UserDb from "../../database/repository/user";
import SuccessResponse from "../../utils/SuccessResponse";

interface userData {
  name: string;
  email: string;
  password: string;
  category: string;
}

const createUser  = async ({name, email, password, category} : userData) => {
   await UserDb.emailExist(email)

   let savedUserData = await UserDb.saveUser({name, email, password, category})

   return SuccessResponse('User saved successfully', savedUserData, 201)

}


export {userData, createUser}