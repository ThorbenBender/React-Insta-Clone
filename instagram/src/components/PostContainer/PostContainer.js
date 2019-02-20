import React, {Component} from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.data.comments,
            inputValue: '',
            like: 5,
            liked: false,
        }
    }
    addNewComment = (event) => {
        event.preventDefault();
        let newArray = this.state.comments.concat({username: 'Thorben Bender', text: this.state.inputValue});
        this.setState({comments: newArray, inputValue: ''});
    }
    incrementLike = () => {
        this.setState(state => {
            return {like: state.like + 1};
          });
    }
    decreaseLike = () => {
        this.setState(state => {
            return {like: state.like -1 };
          });
    }

    isLiked = () => {
        if (this.state.liked){
            this.decreaseLike();
        }
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
                    <div className="comment-section-like">
                        <button onClick={() => this.isLiked()}>{this.state.like}</button>
                    </div>
                    <CommentSection comments={this.state.comments} />
                    <form onSubmit={this.addNewComment}>
                        <input type="text" value={this.state.inputValue} onChange={this.createNewComment} placeholder="Add a comment..."></input>
                    </form>
                </div>
            </div>
        )
    }
}
