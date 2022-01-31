export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    website:string;
    
    constructor(id: string, name: string, username: string, email: string, website: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.website = website;
    }
} 
