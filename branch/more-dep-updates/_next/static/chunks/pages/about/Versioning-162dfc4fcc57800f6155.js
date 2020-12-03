_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"/uL9":function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/Versioning",function(){return n("0Fcp")}])},"0Fcp":function(e,s,n){"use strict";n.r(s),n.d(s,"meta",(function(){return u})),n.d(s,"default",(function(){return f}));var t=n("cxan"),o=n("HbGN"),r=n("ERkP"),i=n.n(r),l=n("ZVZ0"),a=n("zEEr"),c=n("VEKf"),p=n("wSpH"),d=n("Qi1R"),u=(i.a.createElement,{name:"Versioning policy"}),b={meta:u};function f(e){var s=e.components,n=Object(o.a)(e,["components"]);return Object(l.a)("wrapper",Object(t.a)({},b,n,{components:s,mdxType:"MDXLayout"}),Object(l.a)("p",null,"The current version of Components is ",Object(l.a)(d.c,{version:a.version,mdxType:"PackageVersion"}),". CSS is at ",Object(l.a)(d.c,{version:c.version,mdxType:"PackageVersion"}),". Dynamic Flows is at ",Object(l.a)(d.c,{version:p.version,mdxType:"PackageVersion"}),"."),Object(l.a)("p",null,"Our goal is to ensure all our consumers understand when and how new features are added, and to be well-prepared when we remove features or make breaking changes."),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"We understand you need stability from Neptune Web, and are working towards less and less frequent breaking changes.")," We appreciate your patience while we get there."),Object(l.a)("h2",{id:"versioning"},"Versioning"),Object(l.a)("p",null,"We follow ",Object(l.a)("a",Object(t.a)({parentName:"p"},{href:"https://semver.org"}),"SemVer"),". Please note that we do not bump versions for changes to the internal implementation of components."),Object(l.a)("p",null,"We only support the latest version of Neptune Web, and do not backport any changes to older versions."),Object(l.a)("h2",{id:"deprecation"},"Deprecation"),Object(l.a)("p",null,"In the event of a planned breaking change, we will add warnings in the console (in development only) to indicate that a feature in use is scheduled for deprecation, and will provide migration instructions."),Object(l.a)("p",null,"In general, the feature will be removed in the next major version, but we will provide advice if the time period is known to be different from this."),Object(l.a)("h2",{id:"release-schedule"},"Release schedule"),Object(l.a)("p",null,"Currently we release at most one major release per month. We hope to reduce the frequency of major releases further over the coming months, as the library stabilises."),Object(l.a)("p",null,"The core team will generally release a minor release once per fortnight, with patch releases when required."),Object(l.a)("p",null,"Because we accept contributions at all times, extra minor releases may happen when new features are contributed."),Object(l.a)("h2",{id:"relationship-between-packages"},"Relationship between packages"),Object(l.a)("p",null,"We have some inter-package dependencies that cause one version to be bumped when its dependency is updated. Because Components depends on CSS, when we release a new CSS build, we will update the dependency and release a new Components build. The same goes for Dynamic Flows, which has a dependency on Components."))}f.isMDXComponent=!0},VEKf:function(e){e.exports=JSON.parse('{"name":"@transferwise/neptune-css","description":"Neptune CSS is TransferWise\'s Design System CSS library","version":"5.0.1","license":"MIT","repository":{"type":"git","fullname":"transferwise/neptune-web","url":"git+https://github.com/transferwise/neptune-web.git"},"keywords":[],"author":{"name":"TransferWise","url":"https://transferwise.com/"},"bugs":{"url":"https://github.com/transferwise/neptune-web/issues"},"homepage":"https://transferwise.github.io/neptune-web","files":["dist","src"],"scripts":{"build":"npm-run-all build:*","build:clean":"rm -rf dist","build:copy-assets":"npm-run-all --parallel copy:*","build:compile-less":"gulp compileLess --src=\'src/less\'","build:copy-props":"gulp copyPropsAndVars --src=\'src/props\' --dest=\'dist/props\'","build:copy-vars":"gulp copyPropsAndVars --src=\'src/variables\' --dest=\'dist/less\'","dev":"npm-run-all --parallel dev:*","dev:less":"gulp watchLess --src=\'src/less/**\'","dev:props":"gulp watchPropsAndVars --src=\'src/props\'","dev:vars":"gulp watchPropsAndVars --src=\'src/variables\'","docs":"yarn build","copy:images":"cpx \'src/img/**\' dist/img","copy:fonts":"cpx \'src/fonts/*\' dist/fonts","prettier":"prettier --write src/less/*.less","lintless":"stylelint ./src/less","lintless:fix":"yarn lintless --fix"},"dependencies":{"@transferwise/neptune-tokens":"^1.0.0","bootstrap":"github:transferwise/bootstrap#semver:^5.20.0","svgo":"1.3.2"},"devDependencies":{"@next/mdx":"^9.0.5","@mdx-js/loader":"^1.5.8","@transferwise/less-config":"^3.0.0","@zeit/next-css":"^1.0.1","next":"^9.5.5","prop-types":"^15.7.2","react":"16.13.1","react-dom":"16.13.1","yargs":"^15.3.1"},"resolutions":{"svgo":"1.3.2","next/**/kind-of":"^6.0.3","next/**/object-path":"^0.11.5"}}')},wSpH:function(e){e.exports=JSON.parse('{"name":"@transferwise/dynamic-flows","version":"6.1.5","description":"Transferwise dynamic flows and forms","license":"Apache-2.0","main":"./build/es/polyfill/index.js","module":"./build/es/polyfill/index.js","style":"./build/main.css","sideEffects":["*.css"],"files":["build"],"repository":{"type":"git","fullname":"transferwise/neptune-web","url":"git+https://github.com/transferwise/neptune-web.git"},"scripts":{"dev":"npm-run-all --parallel dev:*","dev:watch-less":"gulp watchLess --dest=src","dev:storybook":"start-storybook","docs":"yarn build","build":"npm-run-all build:*","build:clean":"rm -rf lib build","build:compile-less":"gulp compileLess --dest=src","build:es":"NODE_ENV=es babel src -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\'","build:es-nopolyfill":"NODE_ENV=es-nopolyfill babel src -d build/es/no-polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\'","build:copy-files":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/polyfill","build:copy-files2":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/no-polyfill","test":"jest --env=jsdom --runInBand --config=../../node_modules/@transferwise/test-config/jest.config.js && yarn test:lint","test:watch":"jest --watch --env=jsdom --config=../../node_modules/@transferwise/test-config/jest.config.js","test:lint":"jest --config ../../node_modules/@transferwise/test-config/test/jest.lint.js","lint":"eslint \'src/**/*.js\'","lint:fix":"yarn lint --fix","lintless":"stylelint ./src/**/*.less","lintless:fix":"yarn lintless --fix"},"devDependencies":{"@babel/cli":"^7.12.8","@babel/core":"7.12.9","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/plugin-transform-react-jsx":"^7.12.7","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.7","@storybook/addon-a11y":"^6.1.9","@storybook/addon-actions":"^6.1.9","@storybook/addon-docs":"^6.1.9","@storybook/addon-knobs":"^6.1.9","@storybook/react":"^6.1.9","@transferwise/less-config":"^3.0.0","@transferwise/neptune-tokens":"^1.0.0","@transferwise/test-config":"^2.0.0","babel-loader":"^8.1.0","babel-preset-minify":"^0.5.1"},"peerDependencies":{"prop-types":"^15.7.2","react":"16.13.1","react-dom":"16.13.1"},"dependencies":{"@babel/runtime":"^7.12.5","@transferwise/components":"^31.2.0","@transferwise/icons":"^2.6.0","@transferwise/neptune-css":"^5.0.1","classnames":"^2.2.6","core-js":"^3.8.0","lodash.isequal":"^4.5.0"}}')},zEEr:function(e){e.exports=JSON.parse('{"name":"@transferwise/components","version":"31.2.0","description":"TransferWise styleguide components in react","license":"Apache-2.0","main":"./build/umd/polyfill/main.js","module":"./build/es/polyfill/index.js","style":"./build/main.css","sideEffects":["*.css"],"files":["build"],"repository":{"type":"git","fullname":"transferwise/neptune","url":"git+https://github.com/transferwise/neptune-web.git"},"scripts":{"dev":"npm-run-all --parallel dev:*","dev:watch-less":"gulp watchLess --dest=src","dev:storybook":"start-storybook -p 3001","build":"npm-run-all build:*","build:clean":"rm -rf lib build","build:compile-css":"gulp compileLess --dest=src","build:umd":"NODE_ENV=umd rollup -c","build:umd-nopolyfill":"NODE_ENV=umd-nopolyfill rollup -c","build:es":"NODE_ENV=es babel src -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/__mocks__\'","build:es-nopolyfill":"NODE_ENV=es-nopolyfill babel src -d build/es/no-polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/__mocks__\'","build:copy-files":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/polyfill","build:copy-files2":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/no-polyfill","docs":"yarn build","test":"jest --env=jsdom --runInBand --config=../../node_modules/@transferwise/test-config/jest.config.js && yarn test:lint","test:watch":"jest --watch --env=jsdom --config=../../node_modules/@transferwise/test-config/jest.config.js","test:lint":"jest --config ../../node_modules/@transferwise/test-config/test/jest.lint.js","test:visual":"yarn chromatic CHROMATIC_PROJECT_TOKEN || true","lint":"eslint \'src/**/*.js\'","lint:fix":"yarn lint --fix","lintless":"stylelint ./src/**/*.less","lintless:fix":"yarn lintless --fix","build-storybook":"yarn build && build-storybook -c .storybook -o ./dist/my-component/storybook/"},"devDependencies":{"@babel/cli":"^7.12.8","@babel/core":"7.12.9","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/plugin-proposal-optional-chaining":"^7.12.1","@babel/plugin-transform-react-jsx":"^7.12.7","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.7","@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.3","@rollup/plugin-node-resolve":"^7.1.3","@storybook/addon-a11y":"^6.1.9","@storybook/addon-actions":"^6.1.9","@storybook/addon-docs":"^6.1.9","@storybook/addon-knobs":"^6.1.9","@storybook/react":"^6.1.9","@transferwise/icons":"^2.6.0","@transferwise/less-config":"^3.0.0","@transferwise/neptune-css":"^5.0.1","@transferwise/neptune-tokens":"^1.0.0","@transferwise/test-config":"^2.0.0","babel-loader":"^8.1.0","babel-preset-minify":"^0.5.1","chromatic":"^5.4.0","html-loader":"^1.3.2","lodash.times":"^4.3.2","rollup":"^2.34.0","@rollup/plugin-babel":"^5.2.2","rollup-plugin-postcss":"^2.8.2","rollup-plugin-uglify":"^6.0.4"},"peerDependencies":{"@transferwise/icons":"^2.6.0","@transferwise/neptune-css":"^5.0.1","currency-flags":"^2.1.1","prop-types":"^15.7.2","react":"16.13.1","react-dom":"16.13.1"},"dependencies":{"@babel/runtime":"^7.12.5","@transferwise/formatting":"^2.1.0","@transferwise/neptune-validation":"^2.0.5","classnames":"^2.2.6","commonmark":"0.29.1","core-js":"^3.8.0","lodash.clamp":"^4.0.3","lodash.debounce":"^4.0.8","lodash.difference":"^4.5.0","lodash.throttle":"^4.1.1","lodash.topairs":"^4.3.0","react-required-if":"^1.0.3","react-spring":"^8.0.27","react-transition-group":"^4.2.1"},"resolutions":{"@storybook/**/kind-of":"^6.0.3"}}')}},[["/uL9",0,1,2,3]]]);