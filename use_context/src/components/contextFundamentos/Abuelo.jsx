import Padre from './Padre'

const Abuelo = () => {
    return (
        <div className='flex justify-between h-full'>
            <p>C. Abuelo</p>
            <div className='bg-indigo-100 w-3/5 h-full border-2 border-slate-800'>
                <Padre />
            </div>
        </div>
    )
}
export default Abuelo