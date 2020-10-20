export class UserData {
    constructor({ id, login = '', html_url = '', avatar_url = '' }) {
        this.id = id;

        this.login     = { column: 0, type: 'text', content: login };
        this.htmlUrl   = { column: 1, type: 'link', content: html_url };
        this.avatarUrl = { column: 2, type: 'img', content: avatar_url };
    }

    get data() {
        return Object.values(this)
            .filter((prop) => prop && prop.type)
            .sort((a, b) => a.column - b.column);
    }
}