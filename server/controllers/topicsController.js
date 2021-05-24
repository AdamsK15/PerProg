// const TopicsList = [
//     {
//         id: 1,
//         name: "Topic 1",
//         link: "https://www.hazeldenbettyford.org/thought-for-the-day/twenty-four-hours-a-day"

//     },
//     {
//         id: 2,
//         name: "Topic 2",
//         link: "@placeholder"
//     },
//     {
//         id: 3,
//         name: "Topic 3",
//         link: "@placeholder"
//     },
//     {
//         id: 4,
//         name: "Topic 4",
//         link: "@placeholder"
//     },
//     {
//         id: 5,
//         name: "Topic 5",
//         link: "@placeholder"
//     },
//     {
//         id: 6,
//         name: "Topic 6",
//         link: "@placeholder"
//     },
//     {
//         id: 7,
//         name: "Topic 7",
//         link: "@placeholder"
//     }
// ];

// let id = 8;

module.exports = {
    getTopics: async (req, res) => {
        const db = req.app.get('db');

        if (req.query.search) {
            console.log('topics query hit');
            const filterTopics = await db.topics.search_topics(req.query.search)

            res.status(200).send(filterTopics);
        } else {
            const topics = await db.topics.get_all_topics();
            res.status(200).send(topics)
        }
        // res.status(200).send(TopicsList)
    },

    addTopic: async (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        // const {topic_text} = req.body;
        const { username, topics_text, rating } = req.body;
        // let {id, name, link,} = req.body;
        const newTopic = await db.topics.add_topic(user_id, username, topics_text, rating);
        if (newTopic) {
            res.status(200).send(newTopic);
        } else {
            res.status(400).send('Topic could not be added')
        }
        // req.sendStatus(200);
    },

    editTopic: async (req, res) => {
        const db = req.app.get('db');
        const { updated_topic } = req.body;
        const { user_id } = req.params;

        await db.topics.edit_joke(user_id, updated_topic)

        res.sendStatus(200);
    },
    deleteTopic: async (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.params;

        await db.topics.delete_joke(user_id)

        res.sendStatus(200);
    }
}