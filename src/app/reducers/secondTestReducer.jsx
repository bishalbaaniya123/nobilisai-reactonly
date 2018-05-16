export default function reducer(state = {}, action) {
    switch(action.type){
        case 'TEST_ACTION_TWO':
            console.log("This is the TEST_ACTION_TWO");
            return state;
        default:
            console.log("This is the default from second");
            return state;
    }
}