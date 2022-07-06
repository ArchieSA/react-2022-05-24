import {StoreContext} from "../../../contexts/ThemeContext/StoreContext";
import {useContext, useEffect, useRef, useState} from "react";
import { nanoid } from 'nanoid'


function useSelector(selector) {
    const componentKey = useRef(nanoid()); // {current: '12312312'}

    const [value, setValue] = useState();
    const store = useContext(StoreContext);

    useEffect(() => {
        store.subscribe(componentKey.current, (state) => setValue(selector(state)));

        return () => store.unsubscribe(componentKey.current);
    }, []);

    return value;
}

export default useSelector;