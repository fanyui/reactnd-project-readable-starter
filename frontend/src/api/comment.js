
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

export async function create_comment(comment) {

    const reply = await fetch(`${apiEndpoint}/comments`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
            body: JSON.stringify(comment)
        }
    )

    return await reply.json()
}
export async function delete_comment(id) {

    const reply = await fetch(`${apiEndpoint}/comments/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
        }
    )

    return await reply.json()
}
