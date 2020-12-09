export function mapStateToProps(state) {
    return {
        items: state.cart
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        addToCart: (items) => {
            dispatch({
                type: 'CHECKOUT',
                items
            })
        }
    }
}
