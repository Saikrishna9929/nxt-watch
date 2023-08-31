import {Component} from 'react'
import {UserContext} from '../context/index'

class UserProvider extends Component {
  state = {savedVideosList: []}

  onAddToSaveList = videoItem => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoItem],
    }))
  }

  onRemoveFromSaveList = videoId => {
    const {savedVideosList} = this.state

    const filteredVideoList = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoId,
    )
    this.setState({savedVideosList: filteredVideoList})
  }

  render() {
    const {savedVideosList} = this.state
    const {children} = this.props
    return (
      <>
        <UserContext.Provider
          value={{
            savedVideosList,
            onAddToSaveList: this.onAddToSaveList,
            onRemoveFromSaveList: this.onRemoveFromSaveList,
          }}
        >
          {children}
        </UserContext.Provider>
      </>
    )
  }
}

export default UserProvider
