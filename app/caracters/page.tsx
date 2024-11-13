import Link from 'next/link'
import prisma from '../../lib/db'
import { CreatChareacter } from '@/actions/actions'

const CaractersPage = async () => {
    const characters = await prisma.character.findMany()
  return (
    <div className='my-7 text-4xl'>
      <span className='flex justify-center items-center'>Liste de mes personnage de jeux</span>
      <ul className='flex justify-center items-center gap-3 text-xl my-5'>
        {characters && characters.map((character)=>(
            <li key={character.id}>
                <Link href={`/caracters/caracter/${character.name}`}>
                {character.name}
                </Link>
            </li>
        ))}
      </ul>

      <form action={CreatChareacter} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
    

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
            Enter Text
          </label>
          <input
            id="input"
            type="text"
            name='name'
            placeholder="Type something..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default CaractersPage
