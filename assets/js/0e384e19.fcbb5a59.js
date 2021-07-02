(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{426:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return u},default:function(){return c}});var o=t(2122),a=t(9756),i=(t(7294),t(3905)),s={sidebar_position:1},r={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Quick start",description:"The Quiz Generation API follows a webhook approach to deliver quizzes. This is because the time it takes to generate a quiz varies greatly with the size of the input. You can find exact details on each request/response with examples in the API spec. But you can use this guide to start integrating immediately.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/qatapult-docs/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/qatapult-docs/docs/getting-started"}},u=[{value:"Usage",id:"usage",children:[{value:"Handling Generation",id:"handling-generation",children:[]},{value:"Handling Completion",id:"handling-completion",children:[]}]}],l={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Quiz Generation API follows a webhook approach to deliver quizzes. This is because the time it takes to generate a quiz varies greatly with the size of the input. You can find exact details on each request/response with examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://quizgen.io/api/spec"},"API spec"),". But you can use this guide to start integrating immediately."),(0,i.kt)("p",null,"You should also configure your webhook URL to a publicly available URL on your account page. This is so we can send you your quizzes after completion. Quiz generation can take any amount of time from 1 minute to 10s of minutes depending on the size of your input."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use your API key as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer")," token in all of your requests for authenticating your requests. You can get this key from your account page. If you are testing integrations, use your developer key to avoid incurring charges"),(0,i.kt)("h3",{id:"handling-generation"},"Handling Generation"),(0,i.kt)("p",null,"The example below shows a simple request using the axios library for requesting a quiz generation. This request generates a quiz using the transcription from a YouTube video. Methods are available for generating from various sources. We're always adding more sources for generation, please check the Generation Sources page for more details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nconst options = {\n  method: "POST",\n  url: "https://lateral-imagery-306115.uc.r.appspot.com/api/generate/youtube",\n  headers: {\n    "Content-Type": "application/json",\n    Authorization: `Bearer ${API_KEY}`,\n  },\n  data: {\n    source: "YOUTUBE",\n    vid: "11_CHARACTER_YT_VIDEO_ID",\n    numQuestions: 10,\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,i.kt)("p",null,"The example below is a sample response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ok": true,\n  "quiz": {\n    "mcqs": [\n      {\n        "question_id": "c0b8f29e-b02a-11eb-8aeb-42010a8a0003",\n        "question": "Websites that serve generated content usually incorporate what when possible?",\n        "answers": [\n          "local device",\n          "stored files",\n          "local storage",\n          "cloud account"\n        ],\n        "correct": 2,\n        "context": "Websites that serve generated content usually incorporate stored files whenever possible. Technologies such as REST and SOAP, which use HTTP as a basis for general computer-to-computer communication, have extended the application of web servers well beyond their original purpose of serving human-readable pages. In March 1989 Sir Tim Berners-Lee proposed a new project to his employer CERN, with the goal of easing the exchange of information between scientists by using a hypertext system.",\n        "model": "valhalla",\n        "option_eval_scores": [\n          {\n            "local device": "3.152987241744995"\n          },\n          ...\n        ],\n        "eval_score": 3.833566665649414\n      },\n      ...\n    ],\n    "name": "Web Servers",\n    "category": "Technology",\n    "source": "Web Servers"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ok")," parameter is present on almost all responses that don't immediately throw errors, you can use this as a quick check for handling scenarios where quiz generation failed for reasons that are more nauanced. Usually there will be more information attached about why the request failed. Visit the API spec for more information."),(0,i.kt)("h3",{id:"handling-completion"},"Handling Completion"),(0,i.kt)("p",null,"A simple server to handle quiz completion in Express, the same principles apply with any server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import express from 'express';\nimport { Quiz } from '@vox-logic/quizgen'\n\nconst main = async () => {\n  const app = express();\n  const PORT = process.env.PORT || \"8000\";\n\n  app.post('/challenge', async (req, res) => {\n    res.sendStatus(200);\n  })\n\n    app.post('/handle-quiz-completion', async (req, res) => {\n    const quiz = req.body.quiz as Quiz\n    console.log(`Quiz\\n`, {req.body.quiz});\n        res.sendStatus(200);\n  })\n\n  app.listen(parseInt(PORT), \"0.0.0.0\", () => {\n    console.log(`\u26a1\ufe0f[server]: Server is running at http://0.0.0.0:${PORT}`);\n  });\n};\n\nmain();\n")))}c.isMDXComponent=!0}}]);