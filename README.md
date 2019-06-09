# Clockify Checker

I wrote this utils to help me don't forget to clockify my work time.

To use this utils you need to rename `.env.default` file on root folder into `.env` and add your `CLOCKIFY_WORKSPACE_ID` and your `CLOCKIFY_API_KEY`.

I suggest to use [pm2](http://pm2.keymetrics.io/) (install `pm2` via `npm install pm2 -g`) to manage clockify-checker autostart.