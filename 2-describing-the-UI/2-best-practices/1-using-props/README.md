# Overusing State

## Use State Sparingly: 
 - Only add state to components when it’s necessary. If a component doesn’t need to manage its own state, consider using props for data flow instead. Props allow you to pass data from parent components to child components.
## Lift State Up: 
 - When multiple components need to share the same state or when you want to coordinate state changes between components, consider lifting the state up to a common parent component. This means moving the state to the closest common ancestor of the components that need it. By doing so, you can maintain consistent state across related components.
## Controlled vs. Uncontrolled Components:

 ### Controlled Components: 
  - These components rely on state to manage their behavior. For example, input forms are often controlled components because their values are controlled by state.
 ### Uncontrolled Components: 
  - These components don’t rely on state for their behavior. Instead, they use refs or other mechanisms to interact with the DOM directly. Examples include simple buttons or switches.