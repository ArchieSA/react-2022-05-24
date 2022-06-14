import { Header } from "../../components/Header/Header";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { useState } from "react";
import { THEMES } from "../../constants/theme";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import RestaurantsContainer from "../../containers/Restaurants/Restaurants";

export const MainPage = () => {
  const [theme, setTheme] = useState(THEMES.Light);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>
          <Header />
          <ErrorBoundary>
            <RestaurantsContainer />
          </ErrorBoundary>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
};
