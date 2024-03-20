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

# [State: a component’s memory](https://react.dev/learn/adding-interactivity#state-a-components-memory)

- Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

- You can add state to a component with a useState Hook. Hooks are special functions that let your components use React features (state is one of those features). The useState Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.

```
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);
```

# Gallery Component Documentation
The ```Gallery``` component displays a collection of sculptures along with their details. Users can navigate through the sculptures, view additional information, and toggle visibility of sculpture descriptions.

## Usage
1. Installation:
    - Make sure you have React installed in your project.
    - Import the ```Gallery``` component from the appropriate location.
2. Props:
    - The Gallery component does not accept any props.
3. State Management:
    - The component uses React’s useState hook to manage the following state variables:
        - index: Represents the current sculpture index.
        - showMore: Indicates whether additional details are displayed.
4. Methods:
    - handleNextClick(): Increments the sculpture index to display the next sculpture.
    - handleMoreClick(): Toggles the visibility of additional details.
5. Rendered Content:
    - A button labeled “Next” allows users to navigate to the next sculpture.
    - The sculpture name and artist are displayed in an <h2> element.
    - The current sculpture index is shown in an <h3> element.
    - A button labeled “Show details” or “Hide details” toggles the visibility of the sculpture description.
    - The sculpture image is displayed using an <img> element.
6. Example Usage:
```import React from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
```
## Sculpture Data
The ```sculptureList``` array contains objects representing individual sculptures. Each object has the following properties:

    - ```name```: The name of the sculpture.
    - ```artist```: The artist responsible for the sculpture.
    - ```description```: A brief description of the sculpture.
    - ```url```: The URL of the sculpture image.
    - ```alt```: The alt text for the image.