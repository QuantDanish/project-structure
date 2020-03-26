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
    --------+ common
    -----------+ uitls/
    -----------+ services/
    -----------+ style/
    --------+ component
    -----------+ core/
    -------------- TextAreaComponent.jsx
    -------------- TextAreaContainer.js
    -----------+ pagination
    -------------- PaginationComponent.jsx
    -------------- PaginationContainer.js
    ...
    ..
    ..
    --------+ pages

    
```

## Configuration File
All configuration files should be in root directory. e.g. webpack.config.js, tsconfig.json etc.

## 