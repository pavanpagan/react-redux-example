
const initialState = {
    age:20
};
   
const reducer =  (state=initialState, action) => {
    const newState = {...state};
    
    switch(action.type)
    {
        case 'AGE_UP': 
            newState.age ++;
            break;
        
        case 'AGE_DOWN': 
            newState.age --;
            break;
        case 'DO':
                    newState.age --;
                   break;
    }
    return newState;
};

export default reducer;