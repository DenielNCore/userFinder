import { UPDATE_LIST, TOGGLE_USER } from './actionTypes';


export const updateList = ({ list, page, amount }) => ({
    type   : UPDATE_LIST,
    payload: { list, page, amount },
});

export const toggleUser = ({ data, id }) => ({
    type   : TOGGLE_USER,
    payload: { id, data },
});
