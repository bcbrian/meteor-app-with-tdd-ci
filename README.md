# detective
Utility application to help troubleshoot common edSpring issues.

#### Run Detective
Pass in the organization's database that you'd like to explore on startup:

##### Meteor 1.3
You will need to have node installed. A great way to manage this is [nvm](https://github.com/creationix/nvm). Once you have the repo forked and cloned you will need to do an `npm install` in the root directory. After that is complete the following commands are available to get the app running in the way you need it for dev.
###### Running the app
- `npm run start:mn` - run the app connecting to the MN DB
- `npm run start:ia` - run the app connecting to the IA DB

###### Running the tests
- `npm run test:client` - run test testing suite in the browser at [localhost:3100](http://localhost:3100)
- `npm run test:console` - run test testing suite in the console
- `npm run watch:test:console` - run test testing suite in the console and re-run when changes occur

###### Compile the sass
- `npm run build:css` - compile `sass` into css at `client/bundle.css`
- `npm run watch:css` - watch sass files and compile the css file on changes\

###### Get nodemon help to print for help building more scripts
- `npm run watch:help`


#### TODOS

- Currently DBProxy is being replaced by a local copy until the main one is fixed to work with testing. A pull request will be made soon for that.

#### Docs

Tutorials on structuring an app in packages:
- http://experimentsinmeteor.com/package-based-architecture/
- https://themeteorchef.com/recipes/writing-a-package/
