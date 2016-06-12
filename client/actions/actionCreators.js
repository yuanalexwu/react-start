// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// async remove comment
export function removeComment(postId, i) {
	return (dispatch, getState) => {
		// const state = getState();
		setTimeout(() => {
			dispatch(doReomoveComment(postId, i));
		}, 3000);
	};
}

function doReomoveComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	};
}

