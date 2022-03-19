module.exports = (req, res, next) => {
    res.header('Content-Range', 'students 0-20/20')
    next()
}