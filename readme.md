# Folder Structure

## Overall Structure

```
    /
    -- package.json
    -- webpack.config.js
    -- tsconfig.json
    -- .gitignore
    -+ node_modules
    -+ /src
    ---- index.jsx
    ---- index.scss
    ---+ public/
    ------ index.html
    ------ favicon.ico
    -----+ app
    --------- App.jsx
    --------- App.scss
    --------+ store
    ----------  index.js
    ----------  rootReducer.js
    --------+ assets
    -----------+ fonts/
    -----------+ images/
    ..
    ..
    --------+ common
    -----------+ uitls/
    -----------+ services/
    -----------+ style/
    ..
    ..
    --------+ component
    -----------+ core/
    -------------- TextAreaComponent.jsx
    -------------- TextAreaContainer.js
    ...
    ...
    -----------+ pagination
    -------------- PaginationComponent.jsx
    -------------- PaginationContainer.js
    ...
    ...
    --------+ pages
    ----------+ home
    ----------- HomeComponent.jsx
    ----------- HomeContainer.js
    ----------- actionTypes.js
    ----------- reducer.js
    ----------- actionCreator.js
    ----------- services.js
    ----------- initialState.js
    ----------- helper.js


```

## Introduction

This is react project structure to be followed while development.

All configuration files should be in root directory. e.g. webpack.config.js, tsconfig.json etc.

## Naming convention

1. All folder name should be camelCase.
2. React component name should be in PascalCase
3. Use Suffix Component for pure react component
4. User suffix Container for those component which interact with redux

## folder description

### src/public
publicly available files should in this folder
e.g. index.html, favicon.ico


### src/app
Basically it contain App.jsx and app.scss files
rest are folders.

App.jsx will have very broad layout of app like  header|AppRouteComponent|footer

### src/app/assets
app assets like images, fonts should be in this folder

### src/app/common 
services, utils and style which will used across the app will fall in this folder.

**No react component in this folder**

### src/app/component
It contains only folder. No files should be present in this folder.

First folder will be ` core/ ` which contain only atomic component like input, button, textbox etc.
you may use third party library like PrimeNg but core folder will contain only atomic component.

If you want to create a react component which will be used at more than one place in your app than create such components here with folder name same as of component name.
e.g. Pagination, modal, Forms, or any other component as per your application. 

### src/app/pages
This folder contains react components with same folder hierarchy as of your app navigation. Same structure followed in Angular apps.

On first level there should be components like /home, /about/ login/ etc.

each of above component may have child components. These child component will me created inside the parent component.

Further for each component there will be a pure react component, a container component, reducer, types.ts (for typescript devlopment to define prop or state types of component ), action types, action creator, service, util class specific to that component only.
