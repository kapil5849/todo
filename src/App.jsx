import Header from "./components/Header"
import Input from "./components/Input"
import TaskBox from "./components/TaskBox"

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header/>
      <TaskBox/>
      <Input/>
    </div>
  )
}
export default App