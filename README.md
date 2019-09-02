
# SF Film Locations UI

Kindalab code challenge.
### Tools:

 - Typescript
 - React
 - React-redux
 - Redux-sagas
 - Emotion
 - Jest and enzyme to test

  

## Install dependencies

  

`yarn install`

  

## Setup GMaps API Key

  

`export GOOGLE_MAPS_API_KEY=<api_ket>`

If you want to deploy manually:

-  `export AWS_SECRET_KEY_ID="<key_id>"`

  

-  `export AWS_SECRET_ACCESS_KEY="secret_key"`

  

-  `export AWS_DEFAULT_REGION="sa-east-1"`
  

## Commands

  

- Start dev server: `yarn start`

- Run TSLint: `yarn lint`

- Run prettier: `yarn prettier`

- Run tests: `yarn test`

## Manual deploy

 - `yarn build-prod`  
 - `yarn deploy`

## CircleCI Integration

master@CircleCI ![CircleCI](https://circleci.com/gh/joaquin-diaz/coding-challenge-frontend.svg?style=svg)


  

Just to simplify the workflow, the UI is deployed on every merge to master