import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import UserProvider from './UserProvider'
import ThemeProvider from './ThemeProvider'

// Replace your code here

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <UserProvider>
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <ProtectedRoute path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
