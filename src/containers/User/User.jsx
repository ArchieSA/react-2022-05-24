import { User } from "../../components/User/User";
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/user/selectors";

const UserContainer = ({ userId, className }) => {
  const { name } = useSelector((state) => selectUserById(state, userId));

  return <User userName={name} className={className} />;
};

export default UserContainer;
