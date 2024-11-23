import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { ThemeBtn } from "./features/theme/ThemeBtn"
import { selectTheme, toggleTheme } from "./features/theme/themeSlice"
import logo from "./logo.svg"

const App = () => {
  const themeColor = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const handleThemeChange = (e: boolean) => {
    if (e) {
      dispatch(toggleTheme("gray"))
    } else {
      dispatch(toggleTheme("white"))
    }
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: themeColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeBtn handleThemeChange={handleThemeChange} />
        <Counter />
        <Quotes />
      </header>
    </div>
  )
}

export default App
