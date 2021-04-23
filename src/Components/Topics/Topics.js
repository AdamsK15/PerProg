import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Topics extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            updatedTopic: ''
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

    handleEditTopicSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`/api/topics/${this.props.topicObj.topic_id}`, { updated_topic: this.state.updatedTopic })
            .then(() => {
                this.setState({
                    editMode: false,
                    updatedTopic: ''
                })

                this.props.getTopics();
            })
    }

    cancelEditTopic = () => {
        const { editMode, updatedTopic } = this.state;

        this.setState({
            editMode: false,
            updatedTopic: ''
        })
    }

    deleteTopic = () => {
        axios
            .delete(`/api/topics/${this.props.topicObj.topic_id}`)
            .then(() => {
                this.props.getTopics();
            })
    }

    render() {
        const { topicsObj } = this.props;
        const { editMode, updatedTopic } = this.state;


        return (
            <div>
                <div>
                    <p>{topicsObj.topic_text}</p>
                    <div>
                        {
                            editMode ? (
                                <button onClick={this.cancelEditTopic}>cancel</button>
                            ) : (
                                <>
                                    {
                                        topicsObj.user_id === this.props.userReducer.user.user_id ? (
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