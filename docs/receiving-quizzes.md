---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Receiving Quizzes

Like described in the previous section, you need to set up a webhook and update the callback URL on your developer dashboard to receive the quiz.

A sample webhook is as follows

```js
router.post("/receive-quiz", async (req, res) => {
  if (req.body.challenge) return res.sendStatus(200);
  if (!req.body.ok) {
    console.log(`Our quiz wasn't generated because\n${req.body.reason}`);
    res.status(400).json(req.body);
    return;
  }
  const quiz = req.body.quiz;
  console.log({ quiz });
  res.sendStatus(200);
});
```

A `challenge` variable of type boolean is sent from our API when you set the callback URL on the dashboard for verification. The webhook is expected to return a statuscode of `200` once it detects `challenge` in the `req.body`

The sample response is as follows

```json
{
  "quiz": {
    "finalQuestions": [
      {
        "question": "What do teachers do in order to spread awareness among students?",
        "context": "In order to spread awareness among students, teachers may assign them to write some paragraph or complete essay on save earth. Now-a-days, essay writing is one of the good strategies followed by teachers in the schools and colleges. It enhances the English writing skill and knowledge of the students about any topic.",
        "question_id": "3a765830-d9b9-11eb-bea4-07672347282e",
        "answer": "write some paragraph or complete essay on save earth",
        "answer_prob": 0.6519777774810791,
        "valid_prob": 0.9776727557182312
      },
      {
        "question": "What is one of the good strategies used by teachers in schools?",
        "context": "In order to spread awareness among students, teachers may assign them to write some paragraph or complete essay on save earth. Now-a-days, essay writing is one of the good strategies followed by teachers in the schools and colleges. It enhances the English writing skill and knowledge of the students about any topic.",
        "question_id": "3a765831-d9b9-11eb-bea4-07672347282e",
        "answer": "essay writing",
        "answer_prob": 0.7641817927360535,
        "valid_prob": 0.9789347052574158
      }, ...
    ],
    "finalQuestionsLength": 7
  }
}
```

Optionally, we also offer to stream the questions as they are generated using `websockets`. Ideally, you could stream the quizzes while they are generated according to your use case.
