import { ADD_TODO } from '../actions/todos'

import { ADD_GOAL } from '../actions/goals'

const checker = (store) => (next) => (action) => {
	if(
		action.type === ADD_TODO && action.todo.name.toLowerCase().include('bitcoin')
	){
		return alert("nop . thats a bad idea")
	}

	if(
		action.type === ADD_GOAL && action.goal.name.toLowerCase().include('bitcoin')
	){
		return alert("nop . thats a bad idea")
	}
}

export default checker;