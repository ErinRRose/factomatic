const factsReducer = (state = { fact: {text:"loading..."}, loading: true }, action) => {
    switch (action.type) {
        case "LOADING_FACTS":
            return {
                ...state, fact: null, loading: true, 
            };
            case "ADD_FACT":
                return {
                    ...state, fact: action.fact, loading: false,
                };
            case "ADD_TRUTHY":
                return {
                    ...state, truthiness: action.truthiness, loading: false,
                };
            default:
                return state;
    }
};
export default factsReducer;