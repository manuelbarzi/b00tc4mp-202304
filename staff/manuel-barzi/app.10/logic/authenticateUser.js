function authenticateUser(email, password) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email && user.password === password) {
            foundUser = user

            break
        }
    }

    if (foundUser)
        return true
    else
        return false
}