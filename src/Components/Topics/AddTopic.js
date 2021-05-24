import React, { Component } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

class AddTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addMode: false,
            newTopic: '',
            username: '',
            topics_text: '',
            rating: 0
        }
    }

    ratingChanged = (newRating) => {
        this.setState({ rating: newRating });
        console.log(newRating);
    };

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
            .post('/topics/add', { username, topics_text, rating })
            .then(() => {
                this.setState({
                    username: '',
                    topics_text: '',
                    rating: 0
                });

                this.props.getTopics();
            })
            .catch(err => console.log(err))
    }

    render() {
        const { addMode, newTopic, username, topics_text, rating } = this.state;

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
                            <input name='newTopic' placeholder='topic category' onChange={this.handleChange} value={newTopic} />

                            <input name='newTopic' placeholder='add link' onChange={this.handleChange} value={topics_text} />

                            <ReactStars name='rating' count={5} onChange={this.ratingChanged} type='number' value={rating} />

                            <button type='submit' onClick={this.handleAddTopic}>submit</button>
                        </form>
                    ) : null
                }
            </section>
        )
    }
}

export default AddTopic;