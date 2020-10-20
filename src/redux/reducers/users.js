import { TOGGLE_USER, UPDATE_LIST } from '../actionTypes';
import { UserData } from '../../parsers/UserData';
import { SelectedUserData } from '../../parsers/SelectedUserData';


const initialState = {
    list    : [],
    search  : {},
    selected: {},
};

const getUserData = (data, selected = false) => {
    if (selected) return new SelectedUserData(data);
    return new UserData(data);
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIST: {
            const { page, amount, list } = action.payload;
            return {
                list    : list.map(data => getUserData(data)),
                search  : { page, amount },
                selected: {},
            };
        }
        case TOGGLE_USER: {
            const { id, data } = action.payload;
            return {
                ...state,
                list    : state.list.map((user) => (id === user.id ? getUserData(data, !state.selected[id]) : user)),
                selected: {
                    ...state.selected,
                    [id]: !state.selected[id],
                },
            };
        }
        default:
            return state;
    }
}
