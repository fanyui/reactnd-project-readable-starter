import { apiEndpoint } from '../config'
export async function get_posts(category) {
    console.log('Fetching Posts')
    const response = await fetch(`${apiEndpoint}/${category == "all" ? "posts" : category+"/posts"}`,
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

export async function createPost(post){

    const reply = await fetch(`${apiEndpoint}/posts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
            body: JSON.stringify(post)
        }
    )

    return await reply.json()
}
export async function get_post_details(id){

    const reply = await fetch(`${apiEndpoint}/posts/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
        }
    )

    return await reply.json()
    
}
export async function deletPost(id){

    const reply = await fetch(`${apiEndpoint}/posts/${id}`,
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


export async function vote_post(options, id) {

    const reply = await fetch(`${apiEndpoint}/posts/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
            body: JSON.stringify(options)
        }
    )

    return await reply.json()
}
export async function edit_post(post, id) {

    const reply = await fetch(`${apiEndpoint}/posts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'

            },
            body: JSON.stringify(post)
        }
    )

    return await reply.json()
}