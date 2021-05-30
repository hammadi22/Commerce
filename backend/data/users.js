import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Gal Gadot',
        email: 'gal@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Gigi Hadid',
        email: 'gigi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users