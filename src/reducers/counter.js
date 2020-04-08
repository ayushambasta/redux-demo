const counterReducer = (state = "Ayush", action) => {
    switch(action.type){
        case "UPDATE":
            state = action.title;
            return state;
        case "DELETE":
            state = "";
            return state;
        default:
            return state;
    }
}

export default counterReducer;