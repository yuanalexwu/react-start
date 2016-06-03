import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends Component {
	render () {
		// post id
		const { postId } = this.props.params;
		// index of the post
		const i = this.props.posts.findIndex((post) => post.code === postId);
		// get the post
		const post = this.props.posts[i];
		// comments
		const postComments = this.props.comments[postId] || [];


		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}/>
			</div>
		);
	}
}


export default Single;