var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ErrorResponse from "../../utils/errorResponse";
import { UserModel } from "../models/User";
class UserDb {
    static saveUser({ name, password, email, category }) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = new UserModel({ name, password, email, category });
            let savedUser = yield newUser.save();
            if (!savedUser)
                return new ErrorResponse('could not saved user', 422);
            return savedUser;
        });
    }
    static emailExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailExist = yield UserModel.findOne({ email });
            if (emailExist)
                return new ErrorResponse('User with this email exist', 422);
            return false;
        });
    }
}
export default UserDb;
