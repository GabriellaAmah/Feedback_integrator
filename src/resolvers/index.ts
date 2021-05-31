import getIndex from "../controllers/getIndex";
import { createUser, userData } from "../controllers/user/createUser";

const rootResolver = {
    index: getIndex,

    createNewUser : (args : userData) => {
        let {name, email, password, category} = args
        return createUser({name, email, password, category})
    }
}

export default rootResolver