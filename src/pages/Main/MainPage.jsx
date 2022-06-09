import { Restaurants } from "../../components/Restaurants/Restaurants";
import {Header} from "../../components/Header/Header";
import {restaurants} from "../../constants/fixtures";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StoreContext } from "../../contexts/ThemeContext/Store";
import { store } from "../../store/store";

export const MainPage = () => {
  return (
  <StoreContext.Provider value={store}>
    <ThemeContext.Provider value="dark">
        <div>
            <Header/>
            <Restaurants restaurants={restaurants}/>
        </div>
    </ThemeContext.Provider>
  </StoreContext.Provider>
  )
};
