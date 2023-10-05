import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError()
    return(
        err?<div>
        <h1>{err.status}</h1>
        <h2>{err.statusText}</h2>
        <h2>{err.error.message}</h2>
        </div>:<h2>error</h2>
    )
}
export default Error;