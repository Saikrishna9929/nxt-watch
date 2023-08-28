import React from 'react'

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  onToggleTheme: () => {},
})

export const UserContext = React.createContext({
  savedVideosList: [],
  onAddToSaveList: () => {},
  onRemoveFromSaveList: () => {},
})
