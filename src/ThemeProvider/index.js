import {Component} from 'react'
import {ThemeContext} from '../context/index'

class ThemeProvider extends Component {
  state = {isDarkTheme: false}

  onToggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    const {children} = this.props
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            onToggleTheme: this.onToggleTheme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </>
    )
  }
}

export default ThemeProvider
