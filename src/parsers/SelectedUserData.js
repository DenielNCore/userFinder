import { UserData } from './UserData';


export class SelectedUserData extends UserData {
    constructor(data) {
        const { name, followers, following, created_at, company, email, location, blog, bio } = data;
        super(data);

        this.name      = { column: 3, type: 'text', content: name };
        this.followers = { column: 4, type: 'text', content: followers };
        this.following = { column: 5, type: 'text', content: following };
        this.createdAt = { column: 6, type: 'text', content: created_at };
        this.company   = { column: 7, type: 'text', content: company };
        this.email     = { column: 8, type: 'text', content: email };
        this.location  = { column: 9, type: 'text', content: location };
        this.blog      = { column: 10, type: 'link', content: blog };
        this.bio       = { column: 11, type: 'text', content: bio };

        this.selected = true;
    }
}