import { selectBasket } from "../basket/selectors";

export const logger1 = (store) => (next) => (action) => {
  //console.log("1: ", action);

  next(action);
};

export const logger2 = (store) => (next) => (action) => {
  //console.log("2: ", action);

  next(action);
};

// const test = (params) => {
//   if (!params) {
//     console.log("finish");
//     return "finish";
//   }
//
//   console.log(params);
//   return test;
// };
//
// test("1")("2")("3")("4")();
