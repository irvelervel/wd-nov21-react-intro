// React gives you a way of customizing components, in order to make them
// truly re-usable: this feature is called THE PROPS

// an example of object destructuring
// const AnotherComponent = ({ title, subTitle }) => (
const AnotherComponent = (props) => (
  // props is an object
  // if you're passing no props, it will be an empty object
  // every prop you pass to a component, will be a PROPERTY of that object
  <div>
    <h1>{props.title}</h1>
    <h3>{props.subTitle}</h3>
  </div>
)

export default AnotherComponent
