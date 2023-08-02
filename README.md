# Clockify Checker

I wrote this utils to help me don't forget to track to Clockify my work during my work hours.

To use this tool you need to create your `.env` file starting from the `.env.default` file on root folder,
and add your `CLOCKIFY_WORKSPACE_ID` and your `CLOCKIFY_API_KEY`.

## PM2

I suggest you to use [pm2](http://pm2.keymetrics.io/) (install `pm2` via `npm i pm2 -g`) to manage clockify-checker autostart.
    
    pm2 start index.js --name clockify-checker
    pm2 save
