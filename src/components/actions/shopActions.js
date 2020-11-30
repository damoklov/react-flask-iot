export function mapStateToProps(state) {
    return {
        items: state.filteredItems
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}
