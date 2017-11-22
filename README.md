# Dynamic Application Config for NodeJS Apps

## Avoid redeploying your NodeJS app on AWS just to avail of new paramaters/config values.  

In production, at runtime, resources outside our control may require that we adapt to these events.  

Some examples:

* Our data provider chnages a URL
* We need to change the poll timeout on a connection
* Our thread pool size has to be altererd
* Query timeouts need to be extended due to load 
* An API Token is updated

This is available via the excellent Netflix Hystrix, but not for JavaScript/Node.

In a lot of environments this requires a redepoly of an application; as these values are often embedded in the app at deploy time / compile time in the form of Environemt variables or config file. They are read once and persist until an application restarts. 

## No code changing then we should not have to redeploy.

This pattern is described in 'Release It' - a must read bible for the professional software engineer.
 
So now you're faced with a full pipeline release cycle, canary releases to perform that downtime free deplyoment - but there are no code changes, just config.  Time to separate that out..

## Decouple from config
It doesn't need to be this way - all you need is a value changed - this module addresses this by polling a Config store, be it:

* AWS SSM
* Redis [TODO]
* Consul [TODO]

and updating the value of your Env vars

## Starting it up 
* 1 Set your provider, curretly only AWS works: `PROVIDER_TYPE='aws'`
* 2 Export  AWS_ACCESS_KEY_ID='your key'
* 3 Export  AWS_SECRET_ACCESS_KEY='your key'

```
LOG_LEVEL=debug NODE_ENV=development node src/index.js
```

