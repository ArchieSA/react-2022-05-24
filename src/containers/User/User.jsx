import { useSelector } from "react-redux";
import { User } from "../../components/User/User"
import { selectUserById } from "../../store/user/selectors";

export const UserContainer = ({ userId }) => {
 
  const { name } = useSelector((state) =>
  selectUserById(state, userId)
  );

  return (
    <User userName = {name} />
  );
};
