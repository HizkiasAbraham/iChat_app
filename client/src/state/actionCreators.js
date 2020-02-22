import { CHAT_SELECTED } from './actionTypes';


export const selectChat = user => {
    return {
        type: CHAT_SELECTED,
        payload: {
            user
        }
    }
}