import { Component } from 'react';
import axios from 'axios';

class AddTopic extends Component {
    constructor() {
        super();
        this.state = {
            addMode: false,
            newTopic: '',
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleToggleAddTopic = () => {
        this.setState({ addMode: !this.state.addMode })
    }

    handleAddTopic = e => {
        e.preventDefault();

        axios
            .post('/api/topics', { topic_text: this.state.newTopic })
            .then(() => {
                this.setState({
                    newTopic: ''
                })

                this.props.getTopics();
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