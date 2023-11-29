## Developing locally

### Connecting a local version of @unleash/proxy-client-react

The first step is to find the folder where your local version of unleash proxy client is located and run:

```yarn link```

Then in this repository run: 

```
yarn link @unleash/proxy-client-react
```

Now you should be setup with the local version of @unleash/proxy-client-react. It's likely that when you run `yarn start` in this project you'll get an error saying "Invalid Hooks Call". This is due to conflicting versions of react being used. To fix this, link this project to the version of react that your local version of @unleash/proxy-client-react is using by amending the package json react dependency path: 

```
// Update with actual path depending on the location of the module
"react": "../../../proxy-client-react/node_modules/react",
```

NOTE: Make sure you run `yarn build` in the linked repository whenever you want to see changes reflected in this project.