import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // editMode: false,
            // updatedTopic: '',
            username: '',
            topics_text: '',
            rating: 0
        }
    }


    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    editTopicMode = () => {
        this.setState({
            editMode: true
        })
    }

    handleEditTopicSubmit = () => {
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
            });
    };

    cancelEditTopic = () => {
        const { editMode, updatedTopic } = this.state;

        this.setState({
            editMode: false,
            updatedTopic: ''
        })
    }

    deleteTopic = () => {
        axios
            .delete(`/topics/${this.props.topicsObj.topic_id}`)
            .then(() => {
                this.props.getTopics();
            })
    }

    render() {
        const { topicsObj } = this.props;
        const { editMode, updatedTopic } = this.state;

        console.log(topicsObj)
        console.log(this.props.userReducer.user)

        const { username, topics_text, rating } = this.state;


        return (
            <div>
                <div>
                    <p>Submited By: {topicsObj.username}</p>
                    <p>{topicsObj.topics_text}</p>
                    <ReactStars {...topicsObj.rating} />
                    <div>
                        {
                            editMode ? (
                                <button onClick={this.cancelEditTopic}>cancel</button>
                            ) : (
                                <>
                                    {
                                        topicsObj === this.props.userReducer.user ? (
                                            <>
                                                <button onClick={this.editTopicMode}>edit</button>
                                                <button onClick={this.deleteTopic}>X</button>
                                            </>

                                        ) : null
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
                {
                    editMode ? (
                        <>
                            <form onSubmit={this.handleEditTopicSubmit}>
                                <input name='updatedTopic' onChange={this.handleChange} value={updatedTopic} />

                                <button type='submit'>submit</button>
                            </form>

                        </>
                    ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default connect(mapStateToProps)(Topics);