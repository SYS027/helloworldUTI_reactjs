import React, { useEffect, useState } from "react";

const Hello = () => {
    // Define state for your data
    const [user, setUser] = useState([]);

    // Define an async function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch("");
            const data = await response.json();
            setUser(data); // Update the user state with the fetched data
        } catch (error) {
            console.error("error fetching user data", error);
        }
    };

    useEffect(() => {
        fetchData(); // Call the fetchData function when the component mounts
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="col-md-6 col-sm-12">
                        <select className="form-select" aria-label="Default select example">
                            {user.map((userItem) => (
                                <option key={userItem.id} value={userItem.id}>
                                    {userItem.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hello;
