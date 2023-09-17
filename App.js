import React  from "react"
import ReactDOM from "react-dom/client"

//React Element =>object =>(whener render to dom it becomes html)HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"hello world");
console.log(heading) // object
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(heading)