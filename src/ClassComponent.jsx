// a React Component can be built as a function
// OR as a Class
// every class is EXTENSIBLE (it means it can inherit properties and features
// out of OTHER classes)
// we always create our class components out of the main class component that exists
// it's called Component inside the react library

import { Component } from 'react'

class ClassComponent extends Component {
  // a class component is MORE POWERFUL than a functional component
  // every class component needs a mandatory render() method
  render() {
    return (
      <div>
        {/* this is an object carrying information about the
          current INSTANCE of the class (so not the factory, but the chair) */}
        <h1>{this.props.mainHeading}</h1>
      </div>
    )
  }
}

export default ClassComponent
