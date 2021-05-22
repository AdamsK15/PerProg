import { Component } from 'react';
import axios from 'axios';

class AddTopic extends Component {
    constructor() {
        super();
        this.state = {
            addMode: false,
            newTopic: '',
            username: '',
            topics_text: '',
            rating: 0
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleToggleAddTopic = () => {
        this.setState({ addMode: !this.state.addMode })
    }

    handleAddTopic = () => {
        // e.preventDefault();
        const { username, topics_text, rating } = this.state;
        axios
            .post('/api/topics', { username, topics_text, rating })
            .then(() => {
                this.setState({
                    username: '',
                    topics_text: '',
                    rating: 0
                });

                // this.props.getTopics();
            })
            .catch(err => console.log(err))
    }

    render() {
        const { addMode, newTopic } = this.state;

        return (
            <section>
                <button onClick={this.handleToggleAddTopic}>
                    {
                        addMode ? 'Cancel' : 'Add Topic?'
                    }
                </button>
                {
                    addMode ? (
                        <form onSubmit={this.handleAddTopic}>
                            <input name='newTopic' placeholder='suggest new topic' onChange={this.handleChange} value={newTopic} />

                            <button type='submit'>submit</button>
                        </form>
                    ) : null
                }
            </section>
        )
    }
}

export default AddTopic;