import { apiEndpoint } from '../config'
export async function get_category() {
    console.log('Fetching categories')
    const response = await fetch(`${apiEndpoint}/categories`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'one-man-army'
            },
        })
        console.log(response)
    const result = await response.json()
    return result
}