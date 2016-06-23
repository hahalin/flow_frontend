
import React, { Component } from 'react'
import ReactDOM,{render} from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

import Pmain from './widget/main'
import SubMenu from './widget/submenu'
import auth from './auth/auth'
import store from './stores'


const Dashboard = React.createClass({
  render() {
    const token = auth.getToken()
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    )
  }
})


const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h1>About</h1>
  }
})

const Login = withRouter(
  React.createClass({

    getInitialState() {
      return {
        error: false
      }
    },

    handleSubmit(event) {
      event.preventDefault()
      console.log(this.refs)
      console.log(this.refs.email)
      const email = this.refs.email.value
      const pass = this.refs.pass.value

      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
          <button type="submit">login</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
      )
    }
  })
)

function requireAuth(nextState, replace) {
	//return true;
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}



//ReactDOM.render(<Pmain/>, document.getElementById('main'));
ReactDOM.render(<Pmain/>, document.body);
//ReactDOM.render(<SubMenu/>, document.getElementById('submenu'));

// render((
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App}>
// 	    	<Route path="login" component={Login} />
//     	    <Route path="about" component={About} />
// 			<Route path="dashboard" component={Dashboard} 
// 				onEnter={requireAuth} 
// 			/>
// 		</Route>
// 	</Router>),
// 	document.getElementById('mainmenu')
// )

//