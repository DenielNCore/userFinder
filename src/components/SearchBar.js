import React from 'react';
import { connect } from 'react-redux';
import { updateList } from '../redux/actions';
import { MAX_USERS_ON_PAGE } from '../constants';
import { getUsersByPage } from '../Router';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: MAX_USERS_ON_PAGE,
            page  : 1,
        };
    }

    updatePage = page => {
        this.setState({ page });
    };

    updateAmount = amount => {
        this.setState({ amount });
    };

    startSearch = async () => {
        const { page, amount } = this.state;
        let list               = await getUsersByPage({ page, amount });
        this.props.updateList({ list, page, amount });
    };

    render() {
        return (
            <div className={"users__search__bar"}>
                <span>Page</span>
                <input type={'number'} min={1} max={100000}
                       onChange={e => this.updatePage(e.target.value)}
                       value={this.state.page}
                />
                <span>Limit</span>
                <input type={'number'} min={10} step={10} max={1000}
                       onChange={e => this.updateAmount(e.target.value)}
                       value={this.state.amount}
                />
                <button className="add-todo" onClick={this.startSearch}>
                    Show users
                </button>
            </div>
        );
    }
}


export default connect(
    null,
    { updateList },
)(SearchBar);
