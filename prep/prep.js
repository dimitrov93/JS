class Story {
    constructor(title,creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._reply = [];
    }


    get likes() {
        if (this._likes.length <= 0) {
            return `${this.title} has 0 likes`
        }

        if (this._likes.length = 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `{username of the first person that liked the story} and ${this._likes - 1} others like this story!`
        }
    }

    like(username) {
        if (this._likes[username]) {
            throw new Error(`You can't like the same story twice!`)
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        }

        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike (username) {
        if (!this._likes.includes(username) ) {
            throw new Error(`You can't dislike this story!`)
        } else {
            let index = this._likes.indexOf(username)
            this._likes.splice(index,1)
            return `${username} disliked ${this.title}`
        }
    }


    comment (username, content, id) {
        id = Number(id);

        if (id === undefined || !this._comments[id]) {
            let index = this._comments.length + 1;
            this._comments.push({'Id':index, 'Username':username, 'Content': content, 'Replies': []})
            return `${username} commented on ${this.title}`
        }

        if (this._comments[id]) {
            let numIndex = this._comments[id].Id
            let lowINdex = 0.1;
            let finalIndex = numIndex + lowINdex;
            this._comments[id].Replies.push({'Id':finalIndex, 'Username':username, 'Content':content})
            lowINdex += 0.1;

            return "You replied successfully"; // (((())))
        }

    }

    toString(sortingType) {
        let result = `Title: ${this.title} \nCreator: ${this.creator} \nLikes: ${this._likes.length} \nComments:` + `\n`
   
        if (sortingType === 'username') {
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username))           
        }
        
        this._comments.forEach(c => {
            result += `-- ${c.Id}. ${c.Username}: ${c.Content}\n`;

            c.Replies.forEach(r => {
                result += `--- ${r.Id}. ${r.Username}: ${r.Content}\n`;
            })
        })
        
        return result;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log('')
console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
