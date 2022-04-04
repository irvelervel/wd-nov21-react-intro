// your React Component file MUST have a name that starts with a Capital letter
// the extension can be .js or .jsx (I'll recommend you to use .jsx, it's more explicit)

// if your arrow functional component immedately return the JSX,
// like every arrow you can omit the {} and the return statement
const FunctionalComponent = () => (
  //   this is called <> a FRAGMENT
  <>
    <h2>HELLO</h2>
    <p>From Nov21</p>
  </>
)

// in order to use MyComponent, you need to EXPORT IT from this file
export default FunctionalComponent
