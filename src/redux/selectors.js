export const getUserState = store => store.users;

export const getUserLists = store =>
    getUserState(store) ? getUserState(store).list : [];

export const getUsers = store => getUserLists(store);

export const getUsersBySelectFilter = (store) => {
    return getUsers(store);
};
