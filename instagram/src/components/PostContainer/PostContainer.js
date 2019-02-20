import React, {Component} from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.data.comments,
            inputValue: '',
        }
    }
    addNewComment = (event) => {
        event.preventDefault();
        let newArray = this.state.comments.concat({username: 'Thorben Bender', text: this.state.inputValue});
        this.setState({comments: newArray, inputValue: ''});
    }

    createNewComment = (event) => {
        this.setState({inputValue: event.target.value})
    }
    render() {
        return (
            <div className="Post">
                <div className="User">
                    <img src={this.props.data.thumbnailUrl} alt="user"></img>
                    <p>{this.props.data.username}</p>
                </div>
                <div>
                    <div className="postImage">
                        <img src={this.props.data.imageUrl} alt="post"></img>
                    </div>
                </div>
                <div className="comment-section">
                    <CommentSection comments={this.state.comments} />
                    <form onSubmit={this.addNewComment}>
                        <input type="text" value={this.state.inputValue} onChange={this.createNewComment} placeholder="Add a comment..."></input>
                    </form>
                </div>
            </div>
        )
    }
}
