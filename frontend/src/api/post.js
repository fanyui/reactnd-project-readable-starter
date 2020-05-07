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

    const reply = await fetch(`${apiEndpoint}/post`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }
    )

    return await reply.json()
}
export async function deletPost(id){

    const reply = await fetch(`${apiEndpoint}/post/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    return await reply.json()
}

