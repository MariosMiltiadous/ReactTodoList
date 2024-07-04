import { useState, createContext } from "react";

export const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
    // step 1- global context
    const [name, setName] = useState("MM");
    // step 2 - trachsub cat changes
    

    return (
        <UserNameContext.Provider value={{ name, setName }}>
            {children}
        </UserNameContext.Provider>
    );
};