db.createUser({
    user: "jerry",
    pwd: '1234',
    roles: [{
        role: "readWrite",
        db: 'nest'
    }]
})