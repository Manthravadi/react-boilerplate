import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>Hello World from the dev server!</h1>
        </div>
      </main>
    )
  }
}

export default hot(module)(App)
