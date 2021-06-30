---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Streaming Quizzes

On your application interface, use any of the libraries like `socket.io` to establish a websocket connection.

Here is a sample implementation to establish a websocket connection from your application to our API.

```js
import socketClient, { Socket } from "socket.io-client";
const API = "http://api.qatapult.ai";

constructor() {
    super(props);
    this.socket = socketClient(API);
  }

async generateQuiz() {
    const r = await axios.post(`${YOUR_SERVER}/generate-quiz`, {
      url: {SOURCE_URL_TO_GENERATE_QUIZ_FROM},
      socketId: this.socket.id,
    });
    if (r.data.ok) {
      alert("Quiz generation started");
    }
  }
```

Once you pass your respective `socketId` and the `url`. Our API establishes a websocket connection with your application interface and begin to stream the question as they are being generated.
