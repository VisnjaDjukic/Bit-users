import { User } from "../entities/User"
import { peopleData } from "../shared/data"


function getData() {

    const listOfUser = peopleData.results;
    const finalUser = listOfUser.map((user) => {
        const { name, dob, picture, email } = user;

        const { first } = name;
        const { date } = dob;

        return new User(first, picture, email, date);
    }
    );
    return finalUser;
}

export { getData }