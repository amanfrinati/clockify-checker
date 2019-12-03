const https = require('https');
const notifier = require('node-notifier');
const cron = require('node-cron');

require("dotenv").config();

const httpClockifyOptions = {
  hostname: "api.clockify.me",
  path: `/api/workspaces/${
    process.env.CLOCKIFY_WORKSPACE_ID
  }/timeEntries/inProgress`,
  headers: {
    "content-type": "application/json",
    "X-Api-Key": process.env.CLOCKIFY_API_KEY
  }
};

cron.schedule("*/5 9-12,14-17 * * MON-FRI", () => {
  const req = https.request(httpClockifyOptions, res => {
    if (res.headers["content-length"] === "0") {
      notifier.notify({
        title: "Clockify Notifier",
        message: "Remember of clockify your time!",
        wait: true
      });
    }

    // Notify user about what is working
    // res.on('data', d => {
    // process.stdout.write(d);
    // 	notifier.notify({
    //   title: 'Clockify notifier',
    //   message: `Good! You are working for ${d.description}`
    // });
    // });
  });

  req.on("error", e => {
    console.error(e);
  });
  req.end();
});
