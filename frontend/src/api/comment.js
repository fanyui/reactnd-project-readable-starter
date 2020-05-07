
import { apiEndpoint } from '../config'
export async function get_comments(postId) {
    console.log('Fetching Posts')
    const response = await fetch(`${apiEndpoint}/posts/${postId}/comments`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'
            },
        })
    const result = await response.json()
    return result

}
