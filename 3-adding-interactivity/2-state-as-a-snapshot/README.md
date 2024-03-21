# React + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Installation
```
npm install
```

## Run it with the following command

```
npm run dev
```

# Step by step tutorial

## Step 1: Import React Hooks Start by importing the useState hook from React, which will help manage the state within our form component.

```import { useState } from 'react';```

## Step 2: Define the Form Component Create a functional component named Form. This will be the main component that renders the form.

```export default function Form() {
  // Component code will go here
}
```

## Step 3: Initialize State Inside the Form component, initialize two pieces of state: to and message. The to state will hold the recipient’s name, and message will hold the message text.

```const [to, setTo] = useState('Alice');
const [message, setMessage] = useState('Hello');
```

## Step 4: Handle Form Submission Define a function called handleSubmit that prevents the default form submission behavior and sets up a delayed alert to simulate sending a message.

```
function handleSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    alert(`You said ${message} to ${to}`);
  }, 5000);
}
```

## Step 5: Build the Form UI Construct the form’s UI with a select dropdown for the recipient and a textarea for the message. Bind their values to the component’s state and set up onChange handlers to update the state when the user interacts with the form elements.

```
return (
  <form onSubmit={handleSubmit}>
    <label>
      To:{' '}
      <select value={to} onChange={e => setTo(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
    </label>
    <textarea
      placeholder="Message"
      value={message}
      onChange={e => setMessage(e.target.value)}
    />
    <button type="submit">Send</button>
  </form>
);
```

## Step 6: Test the Application After implementing the above steps, run your application and test the form. When you submit the form, it should display an alert after a 5-second delay, showing the message and the recipient’s name.