const mongoose = require('mongoose')

const PlanterSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Planter = mongoose.model("Planters", PlanterSchema)
module.exports = Planter