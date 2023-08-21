import { useContext } from "react"
import CasaContext from "../contex/CasaProvider"

const Hijo = () => {
    const { ObjdineroContext, setObjDineroContext } = useContext(CasaContext)

    return (
        <>
            <div>C. Hijo</div>
            <pre>{JSON.stringify(ObjdineroContext, null, 1)}</pre>
						<button onClick={() => { setObjDineroContext({ ...ObjdineroContext, lugar:"",dinero: 0 }) }}
                className="btn btn-success w-full mt-2">Gastar</button>
        </>
    )
}

export default Hijo