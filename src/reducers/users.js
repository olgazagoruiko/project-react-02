const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER' :
            console.log('We add new user');
            console.log(state);
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age : action.age,
                }
            ]
        default:            
                return state;
    }
}

export default users;