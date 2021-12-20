import './App.css';
import {authentication} from './firebase'
import {getAuth , signInWithPopup , GoogleAuthProvider}  from 'firebase/auth'
function App() {
  const signInWithGoogle =() => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(authentication, provider)
    .then((re) => {
      console.log(re)
    }).catch((err) => {
      console.log(err)
    })

  }
  return (
    <div className="App">
        <button onClick={signInWithGoogle}>Sign in With Google </button>
    </div>
  );
}

export default App;
