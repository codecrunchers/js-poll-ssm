# Dynamic Application Config for NodeJS Apps

In the middle of the night, when the business are breathing down your back, asking why with all this DevOps effort and overhead "why it's taking so long' to get back on line - and you know the thread pool size needs to be bigger - but you also know have to redeploy to get the larger pool size parameter in play.    Or a Provider has failed over poorly and are now telling you to use a new Url to contact them.. this sucks, but it's a reality. 

So now you're faced with a full pipeline release cycle, canary releases to perform that downtime free deplyoment - no code changes, just config.  Time to separate that out..

This shouldn't be the way it is - all you need is a value changed - this module addresses
Poll an AWS Parameter Store for changing Key/Values

Avoid redeploying your NodeJS app on AWS just to avail of new parameters in Key Store


## Environment

## Starting it up 
```LOG_LEVEL=info NODE_ENV=development node src/index.js```
