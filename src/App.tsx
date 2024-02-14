import reactLogo from './assets/react.svg'
import blueskyLogo from './assets/bluesky.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://bsky.app" target="_blank">
          <img src={blueskyLogo} className="logo" alt="Bluesky logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coming soon</h1>
    </>
  )
}

export default App
