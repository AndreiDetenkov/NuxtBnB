export default function (context, inject) {
    const appId = '1FMGBHFWUG'
    const apiKey = '094ded0ef6ef8e6a4e1fb0bae796aab7'
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
    }

    inject('dataApi', { getHome })

    async function getHome(homeId) {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers })
            const json = await response.json()
            const { ok, status, statusText } = response

            return { json, ok, status, statusText }
        } catch (error) {
            console.log('error: ', error.status, error.statusText);
            return getErrorResponse(error)
        }
    }

    function getErrorResponse(error) {
        return {
            ok: false,
            status: 500,
            statusText: error.message,
            json: {}
        }
    }
} 