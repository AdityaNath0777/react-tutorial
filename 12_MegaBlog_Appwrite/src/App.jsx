import "./App.css";

function App() {
  // in most of the cases, .env loads only once and
  // whenever we do some changes in the env
  // we need to restart the entire project

  // usual way to access for CRA react-app
  // console.log(process.env.REACT_APP_APPWRITE_URL)

  // but for vite, we need to do this
  console.log(import.meta.env.VITE_APPWRITE_URL); // undefined

  // NOTE: different Framework -> different env approach ALWAYS
  return (
    <>
      <h1>A blog web-app with appwrite</h1>
    </>
  );
}

export default App;