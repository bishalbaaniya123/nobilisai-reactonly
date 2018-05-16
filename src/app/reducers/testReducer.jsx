export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'TEST_ACTION':
            console.log("This is the TEST_ACTION");
            return action.payload;
        case 'TEST_ACTION2':
            console.log("This is the TEST_ACTION2");
            return action.payload;
        case 'TEST_ACTION3':
            console.log("This is the TEST_ACTION3", action.payload);
            return action.payload;
        default:
            console.log("This is the default from the test, just gets called 3 times for no reason!!!!!!");
            return state;
    }
}