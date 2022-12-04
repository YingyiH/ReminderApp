// let Database = {
//     cindy: {
//         reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
//     },
//     alex: {
//         reminders: []
//     } 
// }

let Database = [
    {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    reminders: [{ id: 1, title: "its jim", description: "abcabc", completed: false }],
    },

    {
    id: 2,
    name: "cindy",
    email: "cindy123@gmail.com",
    password: "cindy123!",
    reminders: [{ id: 1, title: "I am cindy", description: "abcabc", completed: false }],
    },

    {
    id: 3,
    name: "alex",
    email: "alex123@gmail.com",
    password: "alex123!",
    reminders: [{ id: 1, title: "I am Alex", description: "abcabc", completed: false }]
    }
]

module.exports = Database;