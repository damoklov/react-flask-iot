const reducer = (state, action) => {
    console.log(action);
    if (state === undefined) {
        return {
            items: [],
            cart: []
        }
    }

    switch (action.type) {
        case 'ADD_TO_CART': {
            const cart = [...state.cart, action.item];
            return {
                ...state,
                cart
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart];
            cart.splice(action.index, 1);
             return {
                ...state,
                cart
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;