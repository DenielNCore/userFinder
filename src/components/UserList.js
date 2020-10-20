import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { getUsersBySelectFilter } from '../redux/selectors';
import { TABLE_COLUMN_NAMES } from '../constants';


const UserList = ({ users }) => (
    <table className="user-list">
        <thead>
        <tr>
            {TABLE_COLUMN_NAMES.map(el => <th key={`${el}`}> {el}</th>)}
        </tr>
        </thead>
        <tbody>
        {users && users.length
            ? users.map(user => <User key={`user-${user.id}`} user={user}/>)
            : null}
        </tbody>
    </table>
);

const mapStateToProps = state => {
    const users = getUsersBySelectFilter(state);
    return { users };
};

export default connect(mapStateToProps)(UserList);
