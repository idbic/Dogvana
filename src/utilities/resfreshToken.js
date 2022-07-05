// Source: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
export const refreshTokenSetup = (res) => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse()
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        console.log('newAuthRes: ', newAuthRes)

        // saveUserToken(newAuthRes.access_token) <-- save new token
        console.log('new auth token', newAuthRes.id_token)

        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming)
    }

    setTimeout(refreshToken, refreshTiming)
}