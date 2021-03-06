import types from "./types";

const sendInfo = item => ({ type: types.SEND_INFO, item });
const resetInfo = item => ({ type: types.RESET_INFO, item });

const addProduct = item => ({ type: types.ADD_PRODUCT, item });
const changeProduct = item => ({ type: types.CHANGE_PRODUCT, item });
const sumProducts = item => ({ type: types.SUM_PRODUCTS, item });

const sumMeals = item => ({ type: types.SUM_MEALS, item });
const resetMeals = () => ({ type: types.RESET_SUM_MEALS });

export default {
  sendInfo,
  resetInfo,
  addProduct,
  changeProduct,
  sumProducts,
  sumMeals,
  resetMeals
};
