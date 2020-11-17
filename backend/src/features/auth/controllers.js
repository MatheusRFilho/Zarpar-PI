module.exports = {
    auth: ctx => {
        const {response} = ctx
        response.body = {message: 'Auth Sucess'}
    }
}