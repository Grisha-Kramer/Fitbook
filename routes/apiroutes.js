const db = require("../models")

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.wo.find({}).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
    })
}