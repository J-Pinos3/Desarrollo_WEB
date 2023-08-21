import { useContext } from 'react'
import CasaContext from '../contex/CasaProvider'
import Abuelo from './Abuelo'

const Casa = () => {
    const { ObjdineroContext} = useContext(CasaContext)
    return (
            <div className='bg-yellow-50 h-full border-1 border-slate-400 shadow-2xl'>
                <p className='text-center mt-3 text-2xl'>¡Yo soy la casa!</p>
                <pre>{JSON.stringify(ObjdineroContext, null, 1)}</pre>
                <div className='flex justify-evenly items-end h-5/6 '>
                    <div className='bg-lime-100 w-full h-96 m-2 border-2 border-slate-800 font-bold'>
                        <Abuelo />
                    </div>
                </div>
            </div>
    )
}

export default Casa