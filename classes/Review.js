class Review {
    constructor({ id, userId, text, user = null }) {
        this.id = id;
        this.userId = userId;
        this.text = text;
        this.user = user;
    }
}

export default Review;