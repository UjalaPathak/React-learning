import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError()
    console.log("err",err)
    return(
        <div>
        <h1>{err.status}</h1>
        <h2>{err.statusText}</h2>
        <h2>{err.error.message}</h2>
        </div>
    )
}
export default Error;