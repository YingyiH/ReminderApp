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
    reminders: [{ id: 1, title: "Credit Card", description: "Remember to take the credit card in that bank.", completed: true }],
    },

    {
    id: 2,
    name: "Dori",
    email: "dori@gmail.com",
    password: "dori123!",
    reminders: [{ id: 1, title: "Yingyi's Birthday", description: "Buy gift for Yingyi", completed: false }],
    },

    {
    id: 3,
    name: "Yingyi",
    email: "Yingyi@gmail.com",
    password: "yingyi123!",
    reminders: [{ id: 1, title: "My Birthday", description: "Wake up at 7:00 am.", completed: false }]
    }
]

module.exports = Database;