import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // we createed thid data, bcz this should be accessible to all the children [components]
    return (
        <UserContext.Provider
            value={{user, setUser}}
        >
            {children}
        </UserContext.Provider>
    )
    }

export default UserContextProvider

// Now, wrap the data in App.jsx with UserContextProvider to App.jsx content be aware of this context and its data