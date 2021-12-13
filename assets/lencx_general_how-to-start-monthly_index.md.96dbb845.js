import{_ as s,c as a,o as n,d as t}from"./app.8246ee71.js";const g='{"title":"\u600E\u6837\u8D21\u732E\u4E00\u7BC7\u6587\u7AE0\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5173\u4E8E\u9879\u76EE","slug":"\u5173\u4E8E\u9879\u76EE"},{"level":2,"title":"\u5FEB\u901F\u5F00\u59CB","slug":"\u5FEB\u901F\u5F00\u59CB"},{"level":3,"title":"Step1","slug":"step1"},{"level":3,"title":"Step2","slug":"step2"},{"level":3,"title":"Step3","slug":"step3"},{"level":3,"title":"Step4","slug":"step4"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"},{"level":2,"title":"\u57FA\u672C\u8BED\u6CD5","slug":"\u57FA\u672C\u8BED\u6CD5"},{"level":3,"title":"\u6807\u9898","slug":"\u6807\u9898"},{"level":3,"title":"\u4EE3\u7801\u5757","slug":"\u4EE3\u7801\u5757"},{"level":3,"title":"\u6587\u5B57\u6837\u5F0F","slug":"\u6587\u5B57\u6837\u5F0F"},{"level":3,"title":"\u8D44\u6E90","slug":"\u8D44\u6E90"},{"level":3,"title":"\u5757\u5F15\u7528","slug":"\u5757\u5F15\u7528"},{"level":3,"title":"TODO \u5217\u8868","slug":"todo-\u5217\u8868"},{"level":3,"title":"\u5217\u8868","slug":"\u5217\u8868"},{"level":3,"title":"\u8868\u683C","slug":"\u8868\u683C"},{"level":2,"title":"\u6269\u5C55\u8BED\u6CD5","slug":"\u6269\u5C55\u8BED\u6CD5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"lencx/general/how-to-start-monthly/index.md","lastUpdated":1639407004670}',e={},p=t(`<h1 id="\u600E\u6837\u8D21\u732E\u4E00\u7BC7\u6587\u7AE0\uFF1F" tabindex="-1">\u600E\u6837\u8D21\u732E\u4E00\u7BC7\u6587\u7AE0\uFF1F <a class="header-anchor" href="#\u600E\u6837\u8D21\u732E\u4E00\u7BC7\u6587\u7AE0\uFF1F" aria-hidden="true">#</a></h1><h2 id="\u5173\u4E8E\u9879\u76EE" tabindex="-1">\u5173\u4E8E\u9879\u76EE <a class="header-anchor" href="#\u5173\u4E8E\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u57FA\u4E8E <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a> + <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">github pages</a> + <a href="https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">github actions</a> + <a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">vitepress</a> \u6784\u5EFA\uFF0C\u7F51\u7AD9\u8BF7\u8BBF\u95EE <a href="https://zkuhut.github.io/monthly/" target="_blank" rel="noopener noreferrer">\u300A\u81FB\u82E6\u820D\u6708\u520A\u300B</a></p><div class="language-bash"><pre><code><span class="token punctuation">[</span>monthly<span class="token punctuation">]</span> <span class="token comment"># \u4ED3\u5E93\u7ED3\u6784</span>
<span class="token operator">|</span>- <span class="token punctuation">[</span>posts<span class="token punctuation">]</span> <span class="token comment"># \u6587\u7AE0\u6839\u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>.vitepress<span class="token punctuation">]</span> <span class="token comment"># vitepress</span>
<span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>user_1<span class="token punctuation">]</span> <span class="token comment"># user_1 \u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>category<span class="token punctuation">]</span> <span class="token comment"># \u5982\u679C\u5185\u5BB9\u590D\u6742\uFF0C\u5EFA\u8BAE\u5206\u7C7B\uFF0C\u540E\u518D\u521B\u5EFA\u6587\u7AE0\u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>post_1<span class="token punctuation">]</span> <span class="token comment"># \u6587\u7AE0 1 \u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>assets<span class="token punctuation">]</span> <span class="token comment"># \u6587\u7AE0_1 \u76F8\u5173\u8D44\u6E90\uFF0C\u65E0\u8D44\u6E90\u53EF\u7701\u7565</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token variable"><span class="token variable">\`</span>- index.md <span class="token comment"># \u6587\u7AE0_1 \u6B63\u6587</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>post_2<span class="token punctuation">]</span> <span class="token comment"># \u6587\u7AE0_2 \u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token operator">|</span>     <span class="token variable">\`</span></span>- <span class="token punctuation">[</span>about<span class="token punctuation">]</span> <span class="token comment"># \u81EA\u6211\u4ECB\u7ECD</span>
<span class="token operator">|</span>     <span class="token operator">|</span>           <span class="token operator">|</span>- <span class="token punctuation">[</span>assets<span class="token punctuation">]</span> <span class="token comment"># \u76F8\u5173\u8D44\u6E90\uFF0C\u65E0\u8D44\u6E90\u53EF\u7701\u7565</span>
<span class="token operator">|</span>     <span class="token operator">|</span>           <span class="token variable"><span class="token variable">\`</span>- index.md <span class="token comment"># \u81EA\u6211\u4ECB\u7ECD</span>
<span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>user_1<span class="token punctuation">]</span> <span class="token comment"># user_2 \u76EE\u5F55</span>
<span class="token operator">|</span>     <span class="token variable">\`</span></span>- <span class="token punctuation">[</span>guide<span class="token punctuation">]</span> <span class="token comment"># \u5E8F</span>
<span class="token operator">|</span>- <span class="token punctuation">[</span>scripts<span class="token punctuation">]</span> <span class="token comment"># \u8F85\u52A9\u811A\u672C</span>
<span class="token operator">|</span>     <span class="token operator">|</span>- <span class="token punctuation">[</span>user.ts<span class="token punctuation">]</span> <span class="token comment"># \u521D\u59CB\u5316\u7528\u6237</span>
<span class="token operator">|</span>     <span class="token variable"><span class="token variable">\`</span>- <span class="token punctuation">..</span>.
<span class="token operator">|</span>- <span class="token punctuation">[</span>node_modules<span class="token punctuation">]</span>
<span class="token operator">|</span>- package.json
<span class="token operator">|</span>- README.md
<span class="token variable">\`</span></span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h2><h3 id="step1" tabindex="-1">Step1 <a class="header-anchor" href="#step1" aria-hidden="true">#</a></h3><p>\u6CE8\u518C/\u767B\u5F55 <a href="https://github.com" target="_blank" rel="noopener noreferrer">github \u8D26\u53F7</a></p><h3 id="step2" tabindex="-1">Step2 <a class="header-anchor" href="#step2" aria-hidden="true">#</a></h3><p>Fork <a href="https://github.com/zkuhut/monthly" target="_blank" rel="noopener noreferrer"><code>zkuhut/monthly</code> \u9879\u76EE</a></p><h3 id="step3" tabindex="-1">Step3 <a class="header-anchor" href="#step3" aria-hidden="true">#</a></h3><blockquote><p>\u4EE5 yarn \u4E3A\u4F8B\uFF0C\u547D\u4EE4\u4E2D\u7684 <code>&lt;username&gt;</code> \u4E3A github \u7528\u6237\u540D</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># 1. clone \u9879\u76EE</span>
<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/monthly.git

<span class="token comment"># 2. \u8FDB\u5165\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> monthly

<span class="token comment"># 3. \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">yarn</span>

<span class="token comment"># 4. \u751F\u6210\u7528\u6237\u6587\u7AE0\u5199\u4F5C\u7A7A\u95F4</span>
<span class="token comment"># \u5728 \`/posts/&lt;username&gt;\` \u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u7AE0\u6587\u4EF6\u5939\uFF0C\u5E76\u5C06\u94FE\u63A5\u6DFB\u52A0\u5230 \`/posts/&lt;username&gt;/toc.ts\`</span>
<span class="token function">yarn</span> user <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
\u2139 <span class="token punctuation">[</span>TOC<span class="token punctuation">]</span> ~<span class="token operator">&gt;</span> /posts/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/toc.ts
\u2139 <span class="token punctuation">[</span>workspace<span class="token punctuation">]</span> ~<span class="token operator">&gt;</span> /posts/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/
\u2714 <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> created successfully<span class="token operator">!</span>

<span class="token comment"># 5. \u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u7528\u6237\u6837\u5F0F</span>
<span class="token comment"># \u4F1A\u5728\u6839\u7ED3\u70B9\u4E3A \`#app\` \u7684 div \u4E0A\u751F\u6210\u540D\u4E3A \`&lt;username&gt;-app\` \u7684 class</span>
<span class="token comment"># &lt;div id=&quot;app&quot; class=&quot;&lt;username&gt;-app&quot;&gt;...&lt;/div&gt;</span>
<span class="token function">yarn</span> style <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
\u2139 <span class="token punctuation">[</span>style<span class="token punctuation">]</span> ~<span class="token operator">&gt;</span> /posts/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/user.scss
\u2714 user.scss created successfully<span class="token operator">!</span>

<span class="token comment"># 6. \u542F\u52A8\u9879\u76EE</span>
<span class="token function">yarn</span> dev

<span class="token comment"># 7. \u6821\u9A8C markdown</span>
<span class="token function">yarn</span> lint
</code></pre></div><h3 id="step4" tabindex="-1">Step4 <a class="header-anchor" href="#step4" aria-hidden="true">#</a></h3><p>\u8D21\u732E\u4EE3\u7801\uFF0C\u521B\u5EFA <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork" target="_blank" rel="noopener noreferrer">Pull requests</a></p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ol><li>\u6587\u7AE0\u8BC4\u8BBA\u7CFB\u7EDF\u4F9D\u8D56 <code>pathname</code>\uFF0C\u6240\u4EE5\u5C3D\u53EF\u80FD\u4FDD\u8BC1\u94FE\u63A5\u540D\u79F0\u6709\u610F\u4E49\uFF0C\u800C\u4E14\u4E00\u65E6\u786E\u5B9A\uFF0C\u4E0D\u8981\u8F7B\u6613\u8FDB\u884C\u53D8\u66F4\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u8BC4\u8BBA\u4E22\u5931\u3002</li><li>\u89C4\u8303 markdown \u5199\u4F5C\uFF0C\u65B9\u4FBF\u7EF4\u62A4\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/ruanyf/document-style-guide" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0/\u4E2D\u6587\u6280\u672F\u6587\u6863\u7684\u5199\u4F5C\u89C4\u8303</a>\u3002</li><li>\u539F\u521B\u4E3A\u4E3B\uFF0C\u9898\u6750\u4E0D\u9650\uFF0C\u53EF\u4EE5\u662F\u601D\u8003\uFF0C\u6280\u672F\u7B49\u3002</li><li>\u4E0D\u8981\u6253\u5E7F\u544A\uFF0C\u5F15\u7528\u6216\u501F\u9274\u7684\u8D44\u6E90\u8981\u6709\u51FA\u5904\u3002</li><li>\u5982\u679C\u5185\u5BB9\u590D\u6742\uFF0C\u5EFA\u8BAE\u63D0\u524D\u505A\u597D\u5185\u5BB9\u5206\u7C7B\uFF0C\u4E0D\u7136\u4FEE\u6539\u6587\u7AE0\u94FE\u63A5\u4F1A\u5F71\u54CD\u8BC4\u8BBA\uFF08<code>\u6CE8\u610F\u4E8B\u9879 1</code>\uFF09</li></ol><h2 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1">\u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u6807\u9898" tabindex="-1">\u6807\u9898 <a class="header-anchor" href="#\u6807\u9898" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> \u4E00\u7EA7\u6807\u9898</span>
<span class="token title important"><span class="token punctuation">##</span> \u4E8C\u7EA7\u6807\u9898</span>
<span class="token title important"><span class="token punctuation">###</span> \u4E09\u7EA7\u6807\u9898</span>
<span class="token title important"><span class="token punctuation">####</span> \u56DB\u7EA7\u6807\u9898</span>
<span class="token title important"><span class="token punctuation">#####</span> \u4E94\u7EA7\u6807\u9898</span>
<span class="token title important"><span class="token punctuation">######</span> \u516D\u7EA7\u6807\u9898</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u5728\u4E00\u7BC7\u6587\u7AE0\u4E2D</p><ul><li>\u4E00\u7EA7\u6807\u9898\u53EA\u53EF\u4EE5\u51FA\u73B0\u4E00\u6B21</li><li>\u5144\u5F1F\u6807\u9898\u4E2D\u540C\u7EA7\u6807\u9898\u53EA\u53EF\u4EE5\u51FA\u73B0\u4E00\u6B21</li></ul></div><h3 id="\u4EE3\u7801\u5757" tabindex="-1">\u4EE3\u7801\u5757 <a class="header-anchor" href="#\u4EE3\u7801\u5757" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><ul><li><strong>\`\`\`md</strong></li><li><strong>\`\`\`js</strong></li><li><strong>\`\`\`vue{2-3,5}</strong> - \u9AD8\u4EAE\u884C\u53F7 <code>2-3</code> \u53CA <code>5</code></li><li>\u652F\u6301 <code>html</code> <code>css</code> <code>scss</code> <code>less</code> <code>ts</code> <code>rust</code> <code>go</code> \u7B49</li></ul><p>\u{1F5A5} \u8F93\u51FA</p><div class="language-md"><pre><code><span class="token comment">&lt;!-- md --&gt;</span>
</code></pre></div><div class="language-vue"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// code...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6587\u5B57\u6837\u5F0F" tabindex="-1">\u6587\u5B57\u6837\u5F0F <a class="header-anchor" href="#\u6587\u5B57\u6837\u5F0F" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><div class="language-md"><pre><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">\u52A0\u7C97\u4E00</span><span class="token punctuation">**</span></span>
<span class="token bold"><span class="token punctuation">__</span><span class="token content">\u52A0\u7C97\u4E8C</span><span class="token punctuation">__</span></span>
<span class="token italic"><span class="token punctuation">_</span><span class="token content">\u659C\u4F53\u4E00</span><span class="token punctuation">_</span></span>
<span class="token italic"><span class="token punctuation">*</span><span class="token content">\u659C\u4F53\u4E8C</span><span class="token punctuation">*</span></span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">\u52A0\u7C97\u659C\u4F53</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
<span class="token code-snippet code keyword">\`\u6807\u8BB0\`</span>
</code></pre></div><p>\u{1F5A5} \u8F93\u51FA</p><p><strong>\u52A0\u7C97\u4E00</strong><br><strong>\u52A0\u7C97\u4E8C</strong><br><em>\u659C\u4F53\u4E00</em><br><em>\u659C\u4F53\u4E8C</em><br><em><strong>\u52A0\u7C97\u659C\u4F53</strong></em><br><code>\u6807\u8BB0</code></p><h3 id="\u8D44\u6E90" tabindex="-1">\u8D44\u6E90 <a class="header-anchor" href="#\u8D44\u6E90" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token url">[<span class="token content">\u94FE\u63A5\u63CF\u8FF0</span>](<span class="token url">https://github.com/</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">\u56FE\u7247\u63CF\u8FF0</span>](<span class="token url">https://avatars.githubusercontent.com/u/88203179</span>)</span>
</code></pre></div><h3 id="\u5757\u5F15\u7528" tabindex="-1">\u5757\u5F15\u7528 <a class="header-anchor" href="#\u5757\u5F15\u7528" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><div class="language-md"><pre><code><span class="token blockquote punctuation">&gt;</span> \u5757\u5F15\u7528
<span class="token blockquote punctuation">&gt;&gt;</span> \u5D4C\u5957\u5757\u5F15\u7528
</code></pre></div><p>\u{1F5A5} \u8F93\u51FA</p><blockquote><p>\u5757\u5F15\u7528</p><blockquote><p>\u5D4C\u5957\u5757\u5F15\u7528</p></blockquote></blockquote><h3 id="todo-\u5217\u8868" tabindex="-1">TODO \u5217\u8868 <a class="header-anchor" href="#todo-\u5217\u8868" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><div class="language-md"><pre><code><span class="token list punctuation">-</span> [ ] \u5F85\u505A
<span class="token list punctuation">-</span> [x] \u5B8C\u6210
</code></pre></div><p>\u{1F5A5} \u8F93\u51FA</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> \u5F85\u505A</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5B8C\u6210</li></ul><h3 id="\u5217\u8868" tabindex="-1">\u5217\u8868 <a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><div class="language-md"><pre><code><span class="token list punctuation">-</span> \u5217\u8868\u683C\u5F0F\u4E00
<span class="token list punctuation">-</span> \u5217\u8868\u683C\u5F0F\u4E00
<span class="token list punctuation">*</span> \u5217\u8868\u683C\u5F0F\u4E8C
<span class="token list punctuation">*</span> \u5217\u8868\u683C\u5F0F\u4E8C
</code></pre></div><p>\u{1F5A5} \u8F93\u51FA</p><ul><li>\u5217\u8868\u683C\u5F0F\u4E00</li><li>\u5217\u8868\u683C\u5F0F\u4E00</li></ul><ul><li>\u5217\u8868\u683C\u5F0F\u4E8C</li><li>\u5217\u8868\u683C\u5F0F\u4E8C</li></ul><h3 id="\u8868\u683C" tabindex="-1">\u8868\u683C <a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a></h3><p>\u2328\uFE0F \u8F93\u5165</p><div class="language-md"><pre><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">\u6807\u9898</span><span class="token punctuation">|</span><span class="token table-header important">\u6587\u5B57\u5C45\u53F3</span><span class="token punctuation">|</span><span class="token table-header important">\u6587\u5B57\u5C45\u4E2D</span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span><span class="token punctuation">---:</span><span class="token punctuation">|</span><span class="token punctuation">:---:</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data">\u6807\u9898\u4E00</span><span class="token punctuation">|</span><span class="token table-data">10</span><span class="token punctuation">|</span><span class="token table-data">20</span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">\u6807\u9898\u4E8C</span><span class="token punctuation">|</span><span class="token table-data">10</span><span class="token punctuation">|</span><span class="token table-data">20</span><span class="token punctuation">|</span>
</span></span></code></pre></div><p>\u{1F5A5} \u8F93\u51FA</p><table><thead><tr><th>\u6807\u9898</th><th style="text-align:right;">\u6587\u5B57\u5C45\u53F3</th><th style="text-align:center;">\u6587\u5B57\u5C45\u4E2D</th></tr></thead><tbody><tr><td>\u6807\u9898\u4E00</td><td style="text-align:right;">10</td><td style="text-align:center;">20</td></tr><tr><td>\u6807\u9898\u4E8C</td><td style="text-align:right;">10</td><td style="text-align:center;">20</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u8868\u683C\u5206\u5272\u7EBF\u7C7B\u578B</p><ul><li>\u6587\u5B57\u5C45\u5DE6\uFF08\u9ED8\u8BA4\uFF09 <code>|---|</code></li><li>\u6587\u5B57\u5C45\u5DE6 <code>|:---|</code></li><li>\u6587\u5B57\u5C45\u53F3 <code>|---:|</code></li><li>\u6587\u5B57\u5C45\u4E2D <code>|:---:|</code></li></ul></div><h2 id="\u6269\u5C55\u8BED\u6CD5" tabindex="-1">\u6269\u5C55\u8BED\u6CD5 <a class="header-anchor" href="#\u6269\u5C55\u8BED\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>vitepress markdown \u8BED\u6CD5\u589E\u5F3A</p></blockquote><div class="language-md"><pre><code><span class="token comment">&lt;!-- \u63D0\u793A --&gt;</span>
::: tip
This is a tip
:::

<span class="token comment">&lt;!-- \u4FE1\u606F --&gt;</span>
::: info
This is an info box
:::

<span class="token comment">&lt;!-- \u8B66\u544A --&gt;</span>
::: warning
This is a warning
:::

<span class="token comment">&lt;!-- \u5371\u9669 --&gt;</span>
::: danger
This is a dangerous warning
:::
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">Basic Syntax</a> - The Markdown elements outlined in John Gruber&#39;s design document.</li><li><a href="https://vitepress.vuejs.org/guide/markdown.html" target="_blank" rel="noopener noreferrer">Vitepress Markdown Extensions</a></li><li><a href="https://vitepress.vuejs.org/guide/frontmatter.html" target="_blank" rel="noopener noreferrer">Vitepress Frontmatter</a></li></ul>`,64),o=[p];function l(c,r,i,u,k,d){return n(),a("div",null,o)}var m=s(e,[["render",l]]);export{g as __pageData,m as default};
