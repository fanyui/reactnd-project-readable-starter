import { GET_CATEGOTY } from '../constant'
import { get_category,} from '../api/category'
function getCategory(categories) {
    return {
        type: GET_CATEGOTY,
        categories,
    }
}




export function handleGetCategory() {
    return (dispatch) => {
        return get_category()
            .then((post) => {
                console.log(post)
                dispatch(getCategory(post))
            })
            .catch((e) => alert('There was and error. Try again. '+ e))
    }
}
