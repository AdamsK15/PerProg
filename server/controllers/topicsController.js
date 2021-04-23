const TopicsList = [
    {
        id: 1,
        name: "Topic 1",
        link: "https://www.hazeldenbettyford.org/thought-for-the-day/twenty-four-hours-a-day"

    },
    {
        id: 2,
        name: "Topic 2",
        link: "@placeholder"
    },
    {
        id: 3,
        name: "Topic 3",
        link: "@placeholder"
    },
    {
        id: 4,
        name: "Topic 4",
        link: "@placeholder"
    },
    {
        id: 5,
        name: "Topic 5",
        link: "@placeholder"
    },
    {
        id: 6,
        name: "Topic 6",
        link: "@placeholder"
    },
    {
        id: 7,
        name: "Topic 7",
        link: "@placeholder"
    }
];

let id = 8;

module.exports = {
    getTopics: (req, res) => {
        res.status(200).send(TopicsList)
    },

    addTopic: (req, res) => {
        // const { name, link } = req.body;
        let {
            id,
            name,
            link,
        } = req.body;
        let newTopic = {
            id,
            name,
            link
        };
        id++
        TopicsList.push(newTopic);
        req.status(200).send(TopicsList)
    },

    // editTopic: (req, res) => {
    //     let { id } = req.params;
    //     let {
    //         name,
    //         link
    //     } = req.query;

    //     let index = TopicsList.findIndex(topic => topic.id === +id);


    //     TopicsList[index].name = name;
    //     TopicsList[index].link = link;

    //     res.status(200).send(TopicsList);
    // },

    // deleteTopic: (req, res) => {
    //     let { id } = req.params;
    //     TopicsList.findIndex(topic => topic.id === +id);
    //     index !== TopicsList.splice(index, 1);
    //     res.status(200).send(TopicsList);
    // }
}