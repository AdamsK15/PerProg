module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db');

        if (req.query.search) {
            const filteredPosts = await db.post.search_posts(req.query.search)

            res.status(200).send(filteredPosts);
        } else {
            const posts = await db.post.get_all_posts();

            res.status(200).send(posts)
        }
    },
    addPost: async (req, res) => {
        const db = req.app.get('db');
        const { hh_user_id } = req.session.user;
        const { post_text } = req.body;

        await db.post.add_post(hh_user_id, post_text);

        res.sendStatus(200);
    },
    editPost: async (req, res) => {
        const db = req.app.get('db');
        const { updated_post } = req.body;
        const { post_id } = req.params;

        await db.post.edit_posts(post_id, updated_post)

        res.sendStatus(200);
    },
    deletePost: async (req, res) => {
        const db = req.app.get('db');
        const { post_id } = req.params;

        await db.post.delete_post(post_id)

        res.sendStatus(200);
    }
}