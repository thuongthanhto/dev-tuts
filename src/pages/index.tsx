import { useRef, useState } from 'react'

function HomePage(props: any) {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null)
  const [feedbackItems, setFeedbackItems] = useState([])

  function submitFormHandler(event: any) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current?.value
    const enteredFeedback = feedbackInputRef.current?.value

    const reqBody = { email: enteredEmail, text: enteredFeedback }

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback Address</label>
          <textarea id="feedback" rows={5} ref={feedbackInputRef} />
        </div>

        <button onClick={submitFormHandler}>Send Feedback</button>
        <ul>
          {feedbackItems.map((item: any) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </form>

      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
    </div>
  )
}

export default HomePage
