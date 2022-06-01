import { Restaurants } from "../../components/Restaurants/Restaurants";
import {Header} from "../../components/Header/Header";
import {restaurants} from "../../constants/fixtures";

export const MainPage = () => (
  <div>
      <Header/>
      <Restaurants restaurants={restaurants}/>
  </div>
);
