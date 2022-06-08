import { Restaurants } from "../../components/Restaurants/Restaurants";
import { Header } from "../../components/Header/Header";
import { restaurants } from "../../constants/fixtures";
import { ThemContext } from "../../components/context/ThemeContext/ThemContext";
import { StoreContext } from "../../components/context/ThemeContext/StoreContext";
import { store } from "../../store/store";

export const MainPage = () => {
  return (
    <StoreContext.Provider value={store}>
      <ThemContext.Provider value='dark'>
        <div>
          <Header />
          <ThemContext.Provider value='light'>
            <Restaurants restaurants={restaurants} />
          </ThemContext.Provider>
        </div>
      </ThemContext.Provider>
    </StoreContext.Provider>

  )
};
