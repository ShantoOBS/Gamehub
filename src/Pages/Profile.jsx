import React, { useEffect } from 'react'

export default function Profile() {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (
        <div>

            <p>profile</p>

        </div>
    )
}
