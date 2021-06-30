---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Getting Started

The QuizGen API allows a fast and flexible way to integrate AI generated quizzes into your existing application with minimal friction. Quiz generation can be done with multiple types of source contents, including YouTube videos and web article links. A full list of supported Source Types are listed in this table

| Source Type   | Support Status                                                            |
| ------------- | ------------------------------------------------------------------------- |
| Article Links | Links wth static content supported ([more info](./Source Types.md/#Text)) |
| YouTube       | Videos with clear voice audio and/or closed captions                      |
| Files         | Files up to 1GB supported                                                 |
| Text          | All types of raw text is supported, structured content preferred          |

## Using the API

All quiz generation endpoints follow the same pattern:

- Send a request
- Get a response confirming the status of your generation request or a failure to start the generation
- Receive an event on your webhook after your quiz is generated
- Send a response to the event confirming that you've received the quiz

To be able to send a request for generation, you first need to obtain an access token, which is availble in your dashboard. You must attach this access token in all your requests using the bearer token format.

<Tabs
groupId="one"
  defaultValue="curl"
  values={[
    { label: 'curl', value: 'curl', },
    { label: 'fetch', value: 'fetch', },
    { label: 'axios', value: 'axios', },
  ]
}>
<TabItem value="curl">

```shell
curl --request POST \
  --url https://api.qaapi.io/v1/generate/text \
  --header 'Authorization: Bearer *access_token_here*' \
  --header 'Content-Type: application/json' \
  --data '{
	"text": "*your_source_content*", etc...
}'
```

</TabItem>
<TabItem value="fetch">

```javascript
fetch("https://api.qaapi.io/v1/generate/text", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
  body: JSON.stringify({
    source: "YOUTUBE",
    vid: "12345678910",
    numQuestions: 10,
  }),
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
```

</TabItem>
<TabItem value="axios">

```shell
axios --request POST \
  --url https://api.qaapi.io/v1/generate/text \
  --header 'Authorization: Bearer *access_token_here*' \
  --header 'Content-Type: application/json' \
  --data '{
	"text": "*your_source_content*", etc...
}'
```

</TabItem>
</Tabs>

## Receiving the Quiz

To receive the quiz when when it's done, you need to set up a webhook on your `dashboard`. If you're testing the integration locally, we recommend using a [ngrok](https://ngrok.com), a tool that gives you a publicly available URL that tunnels traffic to your local server. You can also use [glitch](https://glitch.com) for quick prototyping. Once you've setup your webhook with a public URL, you're ready to receive your quizzes!

**Important**: Make sure to send a response as soon as you receive a request on your webhook. Ideally, you should send a response immediately before doing any other server-side logic. Here's a quick example.
