const cron = require("node-cron");

const jobOne = require("./JobOne")
const jobTwo = require("./JobTwo")


const schedular = () => {
    cron.schedule("* * * * *", jobOne());

    cron.schedule("*/2 * * * *", jobTwo());
};

module.exports = schedular