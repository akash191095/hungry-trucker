# Client

## This is Hungry Trucker

### An application that helps you find food trucks near you.

#### Full-stack submission

#### [Front-end](https://github.com/akash191095/hungry-trucker)

#### [Back-end](https://github.com/akash191095/hungry-trucker-server)

## Info

```
We are using create-react-app to bootstrap the application.
```

## Setup

```
1. Run `npm install` to install the dependencies.
2. Run `npm start` to start the application.
```

## Environment Config

```
REACT_APP_API_LINK = http://localhost:5000
1. This is the backend api link, use localhost when using in local environment or replace with the prod link for production.

REACT_APP_API_TOKEN = 'token'
2. This is the token needed for food truck data.
2.1. Link: https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat
```

## Deployment

```
We are using netlify to deploy this.
Link: https://fervent-elion-a03cef.netlify.app/
```

## More Info

### Tech used

- I am using react.js for this front-end.
- Auth is being handled by the backend server, it's a jwt system and uses cookies to store the token in the browser.
- Using Material UI as the ui framework, I like this framework and have a lot of experience using this, so this was the natural choice.

#### Tests

- Using react-testing-library with jest, thanks to Kent!

## Things I might have done

- Use react-query for caching the data and overall website experience.
- Put more focus on pwa
- Add a search bar on the map to search for a location
- Send a link of a food truck on google maps to get navigation details
