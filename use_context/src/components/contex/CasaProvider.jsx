import { createContext } from "react";
import { useState } from "react";

const CasaContext = createContext()

const CasaProvider = ({ children }) => {

    const [ObjdineroContext, setObjDineroContext] = useState({
        detalle: "Play Station",
				lugar: "sala",
        dinero: 10000
    })

    return (
        <CasaContext.Provider value={{
            ObjdineroContext,
            setObjDineroContext
        }}>
            {children}
        </CasaContext.Provider>
    )
}

export {
    CasaProvider
}

export default CasaContext