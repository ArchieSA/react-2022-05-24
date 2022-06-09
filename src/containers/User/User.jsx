import { useSelector } from "react-redux";
import { selectUserNameById } from "../../store/user/selectors";
import { User } from "../../components/User/User";

const UserContainer = ({userId, className}) => {
    const userName = useSelector((state) => 
        selectUserNameById(state, userId)
    );

    return <User className={className} userName={userName}/>
}

export default UserContainer;

