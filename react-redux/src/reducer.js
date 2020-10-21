const initialState = {
    count: 0,
    arr: [],
    arrObj: [],
    txtName: "",
    txtEmail: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count + -1}
        case "RESET":
            return {...state, count: 0}
        case "ADD_NUM":
            const newArr = [...state.arr, action.num];
            return {...state, arr: newArr};
        case "ADD_PERSON":
            const newObj = [...state.arrObj, {name: "John"}];
            return {...state, arrObj: newObj};
        case "ADD_HISTORY":
            const newHistory = [...state.arrObj, {name: action.name, email: action.email}]
            return {...state, arrObj: newHistory, txtName: "", txtEmail: ""}
        case "TEXT_NAME":
            return {...state, txtName: action.txtName}
        case "TEXT_EMAIL":
            return {...state, txtEmail: action.txtEmail}
        default:
            return state;
    }
}

export default reducer;