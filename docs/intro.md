---
sidebar_position: 1
---

# Quick start

The Quiz Generation API follows a webhook approach to deliver quizzes. This is because the time it takes to generate a quiz varies greatly with the size of the input. You can find exact details on each request/response with examples in the [API spec](https://quizgen.io/api/spec). But you can use this guide to start integrating immediately.

You should also configure your webhook URL to a publicly available URL on your account page. This is so we can send you your quizzes after completion. Quiz generation can take any amount of time from 1 minute to 10s of minutes depending on the size of your input.

## Usage

Use your API key as a `Bearer` token in all of your requests for authenticating your requests. You can get this key from your account page. If you are testing integrations, use your developer key to avoid incurring charges

### Handling Generation

The example below shows a simple request using the axios library for requesting a quiz generation. This request generates a quiz using the transcription from a YouTube video. Methods are available for generating from various sources. We're always adding more sources for generation, please check the Generation Sources page for more details.

```js
import axios from "axios";

const options = {
  method: "POST",
  url: "https://lateral-imagery-306115.uc.r.appspot.com/api/generate/youtube",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  data: {
    source: "YOUTUBE",
    vid: "11_CHARACTER_YT_VIDEO_ID",
    numQuestions: 10,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

The example below is a sample response

```json
{
  "ok": true,
  "quiz": {
    "mcqs": [
      {
        "question_id": "c0b8f29e-b02a-11eb-8aeb-42010a8a0003",
        "question": "Websites that serve generated content usually incorporate what when possible?",
        "answers": [
          "local device",
          "stored files",
          "local storage",
          "cloud account"
        ],
        "correct": 2,
        "context": "Websites that serve generated content usually incorporate stored files whenever possible. Technologies such as REST and SOAP, which use HTTP as a basis for general computer-to-computer communication, have extended the application of web servers well beyond their original purpose of serving human-readable pages. In March 1989 Sir Tim Berners-Lee proposed a new project to his employer CERN, with the goal of easing the exchange of information between scientists by using a hypertext system.",
        "model": "valhalla",
        "option_eval_scores": [
          {
            "local device": "3.152987241744995"
          },
          ...
        ],
        "eval_score": 3.833566665649414
      },
      ...
    ],
    "name": "Web Servers",
    "category": "Technology",
    "source": "Web Servers"
  }
}
```

The `ok` parameter is present on almost all responses that don't immediately throw errors, you can use this as a quick check for handling scenarios where quiz generation failed for reasons that are more nauanced. Usually there will be more information attached about why the request failed. Visit the API spec for more information.

### Handling Completion

A simple server to handle quiz completion in Express, the same principles apply with any server.

```javascript
import express from 'express';
import { Quiz } from '@vox-logic/quizgen'

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || "8000";

  app.post('/challenge', async (req, res) => {
    res.sendStatus(200);
  })

	app.post('/handle-quiz-completion', async (req, res) => {
    const quiz = req.body.quiz as Quiz
    console.log(`Quiz\n`, {req.body.quiz});
		res.sendStatus(200);
  })

  app.listen(parseInt(PORT), "0.0.0.0", () => {
    console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
  });
};

main();
```
