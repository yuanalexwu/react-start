// a reducer takes in two things:

// 1. the action (info about what happend)
// 2. a copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			const new_state = [
				...state.slice(0, i),
				{...state[i], likes:state[i].likes + 10},
				...state.slice(i+1)
			];

			return new_state;
		default:
			return state;
	}
}


export default posts;