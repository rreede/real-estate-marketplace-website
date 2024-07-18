import { useRouteError } from "react-router-dom";


export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    return(
        <>
            <h1>{error.message} Such a page doesn't exist.</h1>
        </>
    )
}