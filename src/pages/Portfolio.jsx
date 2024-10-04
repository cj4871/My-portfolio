import { useState } from "react";

export default function Porfolio(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRepo = async () => {
        try {
            const firstResponse = await fetch('https://api.github.com/users/cj4871')
            if (!firstResponse.ok) {
                throw new Error('Failed to search by common name');
            }
            console.log(firstResponse)

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    fetchRepo()

    return(
        <>
        <img src="" alt="" />
        <h2>Project: </h2>
        <h2>Description:</h2>
        {/* finish this later */}
        </>
    )
}