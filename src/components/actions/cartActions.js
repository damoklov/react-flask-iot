export function mapStateToProps(state) {
    return {
        items: state.cart
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (index) => {
            dispatch({
                type: 'REMOVE_FROM_CART',
                index
            })
        }
    }
}
