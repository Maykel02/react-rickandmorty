import { format, parseISO } from 'date-fns';

function CardsCharacters({name,img, status, created, species, gender, origin}){

    const isoDate = created
    const date  = parseISO(isoDate)

    return(
        <>
            <div className="bg-white flex flex-col items-center rounded-md py-10 px-5">
                <div className="w-full flex justify-end">
                    <span className={`text-white text-sm py-1 px-3 rounded-full border-2 border-solid
                    ${
                        status === 'Alive'? 'bg-green-800 border-green-500':
                        status === 'Dead'  ? 'bg-red-700 border-red-400':
                        'bg-black border-gray-400'
                    }`}>
                            {status}
                        </span>
                </div>
                <img className="w-36 rounded-full my-4" src={img} alt="" />
                <h2 className="font-bold text-xl mb-4">{name}</h2>
                <div className="flex gap-2 text-md text-gray-500 font-normal"><p>Fecha de creación </p> { format(date, 'dd-MM-yyyy') }</div>
                <div className='flex gap-2 my-4'>
                    <span className='text-sm border-2 border-blue-200 py-0 rounded-full px-3'>{species}</span>
                    <span className='text-sm border-2 border-blue-200 py-0 rounded-full px-3'>{gender}</span>
                </div>
                <p className='text-center'>Origen <span className='font-medium'>{origin}</span></p>
            </div>
        </>
    )
}

export default CardsCharacters