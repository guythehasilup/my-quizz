import Quiz  from "./Quiz"
import { jsQuizz } from "./consts"

function App() {
  return <Quiz questions={jsQuizz.questions}/>
}

export default App
