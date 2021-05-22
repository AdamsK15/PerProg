import { Component } from 'react';
import AddTopic from './AddTopic';
import Topics from './Topics';
import { connect } from 'react-redux';
import { updateTopics } from '../../redux/reducers/topicsReducer';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";

class TopicsList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.getTopics();
    }

    getTopics = () => {
        axios
            .get(`/api/topics`)
            .then(res => {
                this.props.updateTopics(res.data)
            })
    }

    searchTopics = () => {
        if (!this.state.search) {
            this.getTopics();
        } else {
            axios
                .get(`/api/topics?search=${this.state.search}`)
                .then(res => {
                    this.props.updateTopics(res.data)

                    this.setState({
                        search: ''
                    })
                })
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const topicsMapped = this.props.topicsReducer.topics.map((topicsObj, i) => <Topics key={i} topicsObj={topicsObj} getTopics={this.getTopics} />)

        // if (!this.props.userReducer.user) {
        //     return <Redirect to='/' />
        // }

        return (
            <section>
                <AddTopic getTopics={this.getTopics} />

                <div>
                    <input name='search' placeholder='search topics' onChange={this.handleChange} value={this.state.search} />
                    <button onClick={this.searchTopics}>search</button>
                </div>

                {topicsMapped}
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps, { updateTopics })(TopicsList);