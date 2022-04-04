import logo from './logo.svg'
import './App.css'
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'
import AnotherComponent from './AnotherComponent'

// this syntax that looks very similar to HTML is actually called JSX
// JSX is a "more powerful" version of the HTML template syntax
// in JSX remember that e.g. "class" cannot be used
// "class" means something in JS, so insted you have to use "className"

// App is a React Component, an encapsulated piece of code that holds both content & logic
// we can assume that a React Component can be as easy as a function returning JSX

function App() {
  let myName = 'Stefano'

  return (
    <div className="App">
      <ClassComponent mainHeading="Welcome to my first React App!" />
      <header className="App-header">
        {/* a prop is for a react component as an attribute is for an HTML tag */}
        <AnotherComponent title="Top Section!" subTitle="Welcome!" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello WD-Nov21! From {myName}</p>
        <AnotherComponent title="Bottom Section!" subTitle="Goodbye!" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FunctionalComponent />
    </div>
  )
}

export default App
