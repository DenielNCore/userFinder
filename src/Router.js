import { DOMAIN } from './constants';


const getResponse = async (data) => {
    try {
        let response = await fetch(data);
        return await response.json() || [];
    } catch (e) {
        console.log(e);
    }
};

export const getUserById = ({ login }) => getResponse(`${DOMAIN}/users/${login}`);

export const getUsersByPage = ({ page, amount }) =>
    getResponse(`${DOMAIN}/users?per_page=${amount}&since=${amount * (page - 1)}`);
