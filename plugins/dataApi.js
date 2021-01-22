export default function (context, inject) {
    const appId = '1FMGBHFWUG'
    const apiKey = '094ded0ef6ef8e6a4e1fb0bae796aab7'

    inject('dataApi', { getHome })

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers: {
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId
            }
        })

        const json = await response.json()
        return json
    }
} 