export const logger = (req, res, next) => {
    console.log(`URL = ${req.url}, Method = ${req.method}`)
    const message = 'This request is going through the logger middleware';
    req.message = message
    next();
}

