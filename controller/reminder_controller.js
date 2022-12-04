let database = require("../database");

let remindersController = {
  list: (req, res) => {
    // res.render("reminder/index", { reminders: database.cindy.reminders });
    res.render("reminder/index", { reminders: req.user.reminders });
    console.log(req.params.email)
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    let formData = req.body
    let reminderToFind = req.params.id - 1;
    req.user.reminders[reminderToFind].title = formData.title;
    req.user.reminders[reminderToFind].description = formData.description;
    req.user.reminders[reminderToFind].completed = formData.completed;
    console.log(req.user.reminders)
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // Implement this code
    let reminderToFind = req.params.id - 1;
    req.user.reminders.pop(reminderToFind)
    console.log(req.user.reminders[reminderToFind])
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
