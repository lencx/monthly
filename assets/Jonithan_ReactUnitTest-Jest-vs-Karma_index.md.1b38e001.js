import{_ as e,c as a,o as t,d as r}from"./app.8246ee71.js";const m='{"title":"\u524D\u8A00","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u57FA\u7840\u77E5\u8BC6\u4ECB\u7ECD","slug":"\u57FA\u7840\u77E5\u8BC6\u4ECB\u7ECD"},{"level":2,"title":"\u4F7F\u7528jest\u6280\u672F\u6808","slug":"\u4F7F\u7528jest\u6280\u672F\u6808"},{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9"},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9"},{"level":2,"title":"\u4F7F\u7528Karma\u6280\u672F\u6808","slug":"\u4F7F\u7528karma\u6280\u672F\u6808"},{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9-1"},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9-1"},{"level":2,"title":"\u5982\u4F55\u9009\u62E9\uFF1F","slug":"\u5982\u4F55\u9009\u62E9\uFF1F"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"Jonithan/ReactUnitTest-Jest-vs-Karma/index.md","lastUpdated":1639407004666}',i={},n=r(`<h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u8FD1\u671F\u5728\u505AReact\u7EC4\u4EF6\u5E93\u65B9\u9762\u7684\u5355\u5143\u6D4B\u8BD5\uFF0C\u4ECE\u4E00\u5F00\u59CB\u4F7F\u7528jest\u6280\u672F\u6808\u5230\u4F7F\u7528karam\u6280\u672F\u6808\uFF0C\u4E2D\u95F4\u8E29\u4E86\u4E00\u4E9B\u5751\uFF0C\u4EE5\u6B64\u6587\u8BB0\u5F55\u3001\u603B\u7ED3\u3002</p><h2 id="\u57FA\u7840\u77E5\u8BC6\u4ECB\u7ECD" tabindex="-1">\u57FA\u7840\u77E5\u8BC6\u4ECB\u7ECD <a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5728\u5355\u6D4B\u4E2D\uFF0C\u4E00\u822C\u6709\u51E0\u4E2A\u6982\u5FF5\u9700\u8981\u4E86\u89E3\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>\u6D4B\u8BD5\u8FD0\u884C\u73AF\u5883\uFF08Test Runtime\uFF09\uFF1A\u6307\u5355\u5143\u6D4B\u8BD5\u4EE3\u7801\u7684\u6267\u884C\u73AF\u5883\u3002\u5BF9\u524D\u7AEF\u6765\u8BF4\u8FD0\u884C\u73AF\u5883\u4E3B\u8981\u6709Node\u6A21\u62DF\u73AF\u5883\uFF08\u5982jsdom\uFF09\u4E0E\u6D4F\u89C8\u5668\u771F\u5B9E\u73AF\u5883\u3002</li><li>\u6D4B\u8BD5\u8FD0\u884C\u5DE5\u5177\uFF08Test Runner\uFF09\uFF1A\u662F\u8D1F\u8D23\u89E3\u6790\u548C\u8C03\u7528\u5355\u5143\u6D4B\u8BD5\u4EE3\u7801\u5E76\u52A0\u8F7D\u6D4B\u8BD5\u8FD0\u884C\u73AF\u5883\uFF08Test Runtime\uFF09\u7684\u5DE5\u5177\u3002</li><li>\u6D4B\u8BD5\u6846\u67B6\uFF08Testing Framework\uFF09\uFF1A\u63D0\u4F9B\u4E86describe()\u3001it()\u3001afterEach()\u7B49\u51FD\u6570\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6D4B\u8BD5\u7528\u4F8B\u3002</li><li>\u65AD\u8A00\u5E93\uFF08Assertion Library\uFF09\uFF1A\u63D0\u4F9B\u4E86expect()\u7528\u4E8E\u5224\u65AD\u7ED3\u679C\u662F\u5426\u6B63\u786E\u7684\u5DE5\u5177\u3002</li><li>\u6269\u5C55\uFF08Testing Plugin\uFF09\uFF1A\u6D4B\u8BD5\u5DE5\u5177\u65B9\u9762\u7684\u6269\u5C55\uFF0C\u6BD4\u5982sinon\uFF0C\u53EF\u4EE5\u63D0\u4F9Bmock\u3001spy\u3001stub\u7B49\u7684\u529F\u80FD\u3002</li></ul><p>\u4EE5\u4E0A\u57FA\u7840\u5206\u7C7B\u53C2\u8003\u548C\u5F15\u7528\u4E86<a href="https://guoyunhe.me/2021/03/19/unit-test-jest-to-karma-mocha-chai/" target="_blank" rel="noopener noreferrer">\u5355\u5143\u6D4B\u8BD5\uFF1A\u4ECE Jest \u5230 Karma+Mocha+Chai</a>\u548C<a href="https://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/" target="_blank" rel="noopener noreferrer">What is the difference between a test runner, testing framwork, assertion library, and a testing plugin?</a>\u4E24\u7BC7\u6587\u7AE0\u7684\u5185\u5BB9\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u57FA\u7840\u6982\u5FF5\u53EF\u4EE5\u7EE7\u7EED\u6DF1\u5165\uFF0C\u672C\u6587\u5C06\u66F4\u591A\u9488\u5BF9\u5728React\u6280\u672F\u6846\u67B6\u4E0A\u7684\u5BF9\u6BD4\u3002</p><p>\u4E86\u89E3\u5B8C\u57FA\u7840\u6982\u5FF5\u540E\uFF0C\u7EE7\u7EED\u4E86\u89E3React\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177\u3002React\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177\u662F\u9488\u5BF9React\u6846\u67B6\u7684\uFF0C\u6240\u4EE5<strong>\u65E0\u8BBA\u662F\u4F7F\u7528jest\u4F53\u7CFB\u6216\u8005karma\u4F53\u7CFB\u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\u3002</strong> \u5176\u6E32\u67D3\u539F\u7406\u4E5F\u662F\u8C03\u7528\u4E86React\u7684API\uFF0C\u5C06\u5185\u5BB9\u6E32\u67D3\u5230\u6D4B\u8BD5\u8FD0\u884C\u73AF\u5883\u4E0A\uFF08\u65E0\u8BBA\u662Fjsdom\u8FD8\u662F\u6D4F\u89C8\u5668\u771F\u5B9E\u73AF\u5883\uFF09\u3002</p><p>\u76EE\u524DReact\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177\u4E3B\u8981\u6709\u4E24\u7C7B\uFF1A</p><ul><li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noopener noreferrer">React Testing Library\uFF08\u7B80\u79F0RTL\uFF09</a></li><li><a href="https://enzymejs.github.io/enzyme/" target="_blank" rel="noopener noreferrer">Enzyme</a></li></ul><p>RTL\u7684\u54F2\u5B66\u662F\u6A21\u62DF\u7528\u6237\u64CD\u4F5C\uFF0C\u901A\u8FC7\u6E32\u67D3\u51FA\u6765\u7684\u5185\u5BB9\u53D8\u52A8\u53BB\u5224\u65AD\u7ED3\u679C\u662F\u5426\u6B63\u786E\u3002Enzyme\u5219\u63D0\u4F9B\u4E86React\u7EC4\u4EF6\u5185\u90E8state\u7684\u5224\u65AD\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD\u7ED3\u679C\u662F\u5426\u6B63\u786E\u3002</p><p>\u4F46\u76EE\u524D\u793E\u533A\u6D3B\u8DC3\u6765\u8BF4\uFF0CEnzyme\u5DF2\u7ECF\u8FDC\u8FDC\u4E0D\u53CARTL\uFF0CEnzyme\u76EE\u524D\u5B98\u65B9\u652F\u6301\u7684React\u7248\u672C\u6700\u65B0\u53EA\u670916\uFF0C17\u7248\u672C\u8FD8\u662F\u793E\u533A\u70ED\u5FC3\u4EBA\u58EB\u63D0\u4F9B\u7684\uFF1B\u800CRTL\u5219\u975E\u5E38\u6D3B\u8DC3\uFF0C<a href="https://reactjs.org/docs/test-utils.html#overview" target="_blank" rel="noopener noreferrer">\u751A\u81F3\u662F\u5B98\u65B9\u63A8\u8350\u7684\u5355\u5143\u6D4B\u8BD5\u6846\u67B6</a>\uFF0C\u5E76\u4E14\u88AB\u96C6\u6210\u5728create-react-app\u811A\u624B\u67B6\uFF08CRA\uFF09\u4E2D\uFF0C\u5F53\u4F60\u4F7F\u7528CRA\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0C\u5176\u9644\u5E26\u7684\u5355\u6D4B\u4F8B\u5B50\u5C31\u662F\u4F7F\u7528RTL\u7684\u3002\u6240\u4EE5\u672C\u6587\u4E2D\u4E5F\u4F7F\u7528RTL\u4F5C\u4E3AReact\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177\u3002</p><h2 id="\u4F7F\u7528jest\u6280\u672F\u6808" tabindex="-1">\u4F7F\u7528jest\u6280\u672F\u6808 <a class="header-anchor" href="#\u4F7F\u7528jest\u6280\u672F\u6808" aria-hidden="true">#</a></h2><p>\u6839\u636E\u5206\u7C7B\uFF0C\u5982\u679C\u662F\u4F7F\u7528Jest\u6280\u672F\u6808\u7684\u8BDD\uFF0C\u6574\u4F53\u7ED3\u6784\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230Jest\u51E0\u4E4E\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u6240\u6709\u7684\u914D\u7F6E\u3002</p><p><img src="https://blog-1256056666.cos.ap-guangzhou.myqcloud.com/img/Jest%E6%8A%80%E6%9C%AF%E6%A0%88.jpg" alt="Jest\u6280\u672F\u6808"></p><h3 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h3><ul><li>\u505A\u5230\u4E86\u51E0\u4E4E\u5F00\u7BB1\u5373\u7528\uFF0C\u4E0ECRA\u7ED1\u5B9A\uFF0C\u53EF\u76F4\u63A5\u4E0A\u624B</li><li>\u6587\u6863\u8D44\u6599\u591A\uFF0C\u4E0A\u624B\u76F8\u5BF9\u7B80\u5355</li></ul><h3 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h3><ul><li>\u6D4B\u8BD5\u8FD0\u884C\u73AF\u5883\u77ED\u671F\u5185\u4EC5\u652F\u6301jsdom\uFF0C\u5728\u9047\u5230\u8C03\u7528\u6D4F\u89C8\u5668API\u65F6\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884Cmock\uFF1B\u4E00\u4E9B\u529F\u80FD\u751A\u81F3\u65E0\u6CD5mock\uFF0C\u4E0B\u6587\u4E3E\u8BE6\u7EC6\u4F8B\u5B50</li></ul><h2 id="\u4F7F\u7528karma\u6280\u672F\u6808" tabindex="-1">\u4F7F\u7528Karma\u6280\u672F\u6808 <a class="header-anchor" href="#\u4F7F\u7528karma\u6280\u672F\u6808" aria-hidden="true">#</a></h2><p>\u6839\u636E\u5206\u7C7B\uFF0C\u5982\u679C\u662F\u4F7F\u7528Karma\u6280\u672F\u6808\u7684\u8BDD\uFF0C\u6574\u4F53\u7ED3\u6784\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u6D4B\u8BD5\u6846\u67B6\u3001\u65AD\u8A00\u5E93\u7B49\u90FD\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884C\u914D\u7F6E\uFF0C\u56E0\u4E3AKaram\u6CA1\u6709\u63D0\u4F9B\u8FD9\u4E9B\u5DE5\u5177\u3002\u5F53\u7136\uFF0C\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u884C\u9700\u8981\u4F7F\u7528<a href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer">Jasmine</a>\u914D\u7F6E\u6D4B\u8BD5\u6846\u67B6\u548C\u65AD\u8A00\u5E93\u3002</p><p><img src="https://blog-1256056666.cos.ap-guangzhou.myqcloud.com/img/Karma%E6%8A%80%E6%9C%AF%E6%A0%88.jpg" alt="Karma\u6280\u672F\u6808"></p><h3 id="\u4F18\u70B9-1" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a></h3><ul><li>\u76F4\u63A5\u4F7F\u7528\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u4E0D\u9700\u8981mock\u6D4F\u89C8\u5668\u76F8\u5173\u7684API\uFF0C\u8FD9\u662F\u4F7F\u7528Karma\u6280\u672F\u6808\u6700\u5927\u7684\u4F18\u52BF\u3002</li><li>\u7075\u6D3B\uFF0C\u5F00\u53D1\u8005\u53EF\u6839\u636E\u9700\u8981\u81EA\u884C\u914D\u7F6E</li></ul><h3 id="\u7F3A\u70B9-1" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a></h3><ul><li>\u914D\u7F6E\u6BD4\u8F83\u7E41\u6742\uFF0C\u6587\u6863\u5C11\uFF0C\u4E0A\u624B\u6210\u672C\u76F8\u5BF9\u9AD8</li></ul><h2 id="\u5982\u4F55\u9009\u62E9\uFF1F" tabindex="-1">\u5982\u4F55\u9009\u62E9\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9\uFF1F" aria-hidden="true">#</a></h2><p>Jest\u6280\u672F\u6808\u4E0EKaram\u6280\u672F\u6808\u90FD\u662F\u5F88\u4F18\u79C0\u7684\u65B9\u6848\uFF0C\u5728\u5B9E\u9645\u573A\u666F\u4E2D\u6839\u636E\u9700\u6C42\u9009\u62E9\u5373\u53EF\u3002\u5982\u679C\u4F60\u6D4B\u8BD5\u7684React\u5E94\u7528\u6216\u7EC4\u4EF6\u5E93\u4E2D\uFF0C\u4EE3\u7801\u6216\u8005\u5176\u4F9D\u8D56\u5E93\u5927\u91CF\u4F7F\u7528\u4E86\u6D4F\u89C8\u5668API\uFF0Cmock\u9EBB\u70E6\uFF0C\u5C31\u53EF\u4EE5\u8003\u8651\u4F7F\u7528Karma\u6280\u672F\u6808</p><p>\u8FD9\u91CC\u4E3E\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528Kama\u6280\u672F\u6808\u3002</p><p>\u5047\u8BBE\u4F60\u7684\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u4F9D\u8D56\u4E8E\u4E00\u4E2AUI\u5E93\uFF0CUI\u5E93\u4F9D\u8D56\u4E8E<a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">Popper.js</a>\uFF0C<strong>\u4F60\u7684\u4EFB\u52A1\u662F\u5BF9\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u914D\u7F6E\u5355\u5143\u6D4B\u8BD5\u3002</strong></p><p>UI\u5E93\u4E2D\u8C03\u7528\u4E86Popper.js\u7684API\u5B9A\u4F4DUI\u7EC4\u4EF6\u663E\u793A\u4F4D\u7F6E\uFF0C\u800CPopper.js\u5E95\u5C42\u5219\u662F\u4F7F\u7528\u4E86<code>e.currentTarget.getBoundingClientRect()</code>\u8FD9\u4E2A\u6D4F\u89C8\u5668\u7684API\u3002\u5728jsdom\u73AF\u5883\u4E0B\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE</p><div class="language-"><pre><code>{ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
</code></pre></div><p>Popper.js\u5219\u4F1A\u53D6\u5176\u4E2D\u7684\u503C\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5176\u4E2D\u4E00\u6B65\u9664\u6CD5\u8BA1\u7B97\u4E3A0 / 0 = NaN\uFF0C\u76F4\u63A5\u5BFC\u81F4\u540E\u7EED\u7684\u4EE3\u7801\u65E0\u6CD5\u8FD0\u884C\u4E0B\u53BB\u3002\u800C\u4F7F\u7528Karma\u6280\u672F\u6808\u7684\u8BDD\uFF0C\u5728\u771F\u5B9E\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u8FD0\u884C\uFF0C\u5219\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u95EE\u9898\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><p><a href="https://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/" target="_blank" rel="noopener noreferrer">What is the difference between a test runner, testing framwork, assertion library, and a testing plugin?</a><br><a href="https://liuyib.github.io/2020/03/20/use-karma-mocha-chai-to-test/" target="_blank" rel="noopener noreferrer">\u4F7F\u7528 Karma + Mocha + Chai \u642D\u5EFA Web \u5355\u5143\u6D4B\u8BD5\u73AF\u5883</a><br><a href="https://guoyunhe.me/2021/03/19/unit-test-jest-to-karma-mocha-chai/" target="_blank" rel="noopener noreferrer">\u5355\u5143\u6D4B\u8BD5\uFF1A\u4ECE Jest \u5230 Karma+Mocha+Chai</a></p>`,34),s=[n];function l(o,h,p,c,d,g){return t(),a("div",null,s)}var f=e(i,[["render",l]]);export{m as __pageData,f as default};