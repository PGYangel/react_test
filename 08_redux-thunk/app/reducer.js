export default (state, action) => {
    if (state == undefined) {
        return state = {v: 0, a: 1, b: 2}
    }
    switch (action.type) {
        case "ADD":
            return {v: state.v + 1, a: 1, b: 2}
            break;
        case "DEL":
            return {v: state.v - 1, a: 1, b: 2}
            break;
        case "ADDNUM":
            return {v: state.v + action.num, a: 1, b: 2}
            break;
    }
}
