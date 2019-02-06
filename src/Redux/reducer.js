const initialState = {
  products: []
};

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
}

export function getAllProducts(products) {
  return {
    type: GET_ALL_PRODUCTS,
    payload: products
  };
}
