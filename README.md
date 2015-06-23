karma-chai-fuzzy
==================

> [Chai-Fuzzy](https://github.com/elliotf/chai-fuzzy) plugin for [Karma](http://karma-runner.github.io)

Installation
------------

Install the `karma-chai-lodash` plugin:

```sh
$ npm install karma-chai-lodash --save-dev
```

Add `chai` and `chai-lodash` to the `frameworks` key in your Karma configuration:

```coffee
module.exports = (config) ->
  config.set

    # frameworks to use
    frameworks: ['mocha', 'chai', 'chai-lodash']

    # ...
```

Browser support
---------------

Same as [Chai.js](http://chaijs.com/guide/installation/#browser-section): IE 9+, Chrome 7+, FireFox 4+, Safari 5+ except `should` style that is currently not compatible with IE 9.

Consider [karma-expect](https://github.com/princed/karma-expect), if you need run tests in IE8 and lower.

Contribution guidelines
--------------------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.
