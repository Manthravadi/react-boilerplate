import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))
class App extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    //debugger;
    var count = this.state.count
    return (
      <div>
        <h1>Hello World from the dev server!</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() => {
            this.increment()
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.decrement()
          }}
        >
          -
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
