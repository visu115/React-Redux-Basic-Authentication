
const initialState = {
    isLoggedIn: false,
}


const reducer = (state = initialState, action) => {


    switch (action.type) {
        case "Access":
           return {
                ...state, isLoggedIn : true
            }
           

            default:
                break;
    }
    return state
}


export default reducer;