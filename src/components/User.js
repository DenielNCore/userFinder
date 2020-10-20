import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleUser } from '../redux/actions';
import { getUserById } from '../Router';


class User extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = async user => {
        const { login, id } = user;
        const { content }   = login;
        const data          = await getUserById({ login: content });
        this.props.toggleUser({ data, id });
    };

    getElement({ type, content, column }, selected) {
        return (
            <td key={`user__data__cell${column}`}>
                {this.getType({ type, content, column }, selected)}
            </td>
        );
    }

    getType({ type, content, column }, selected) {
        switch (type) {
            case 'text':
                return (<span className={cx('user__data__text', selected && 'user__data__text--selected')}>
                    {content}
                </span>);
            case 'link':
                return (<a className={cx('user__data__link', selected && 'user__data__link--selected')} href={content}>
                    {content}
                </a>);
            case 'img':
                return (<img className={cx('user__data__img', selected && 'user__data__img--selected')}
                             src={content} alt={'avatar'}/>);
            default:
                return null;
        }
    }

    render() {
        const { user } = this.props;
        return (user ?
                <tr className="user__row" onClick={() => this.onClickHandler(user)}>
                    {user.data.map(col => this.getElement(col, user.selected))}
                </tr>
                : null
        );
    }
}


export default connect(
    null,
    { toggleUser },
)(User);
