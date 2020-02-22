import { CHAT_SELECTED } from './actionTypes';
const initialState = {
    currentChat: {
        isSelected: false,
        user: null
    },
    contactsList: [
        {
            username: 'yared',
            firstName: 'Yared',
            lastName: 'Tadesse',
            lastMessage: 'Inchebis'
        },
        {
            username: 'neba',
            firstName: 'Nebyu',
            lastName: 'Zekarias',
            lastMessage: 'Essan jirta?'
        }
    ]
};

function reducers(state = initialState, action) {
    switch (action.type) {
        case CHAT_SELECTED:
            return {
                ...initialState,
                currentChat: {
                    isSelected: true,
                    user: action.payload.user
                }
            }
        default:
            return state;
    }
    
}

export default reducers;