import {StoreContext} from "../../../contexts/ThemeContext/StoreContext";
import {useContext} from "react";


function useDispatch() {
    const store = useContext(StoreContext);
    return store?.dispatch.bind(store);
}

export default useDispatch;