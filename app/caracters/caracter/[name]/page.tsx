 import prisma from "@/lib/db"
import Link from "next/link";


const CharacterPage = async (
    {params}:{params:Promise<{name:string}>}) => {
        const {name} = await params;
        const character = await prisma.character.findUnique({
            where:{
                name
            }
        });

        if(!character){
            <div>Not found characters</div>
        }

       
  return (
    <>
    <main className="flex justify-center items-center my-5 text-3xl">
       <Link href={'/caracters'}>
       {name}
       </Link>
    </main>

    <ul>
        <li>
 attack : {character?.attack}
  </li>

  <li>
    defense : {character?.defense}
  </li>
  
  <li>
 healthPoints :{character?.healthPoints}
  </li>

  <li>
  experience : {character?.experience}
  </li>

    </ul>
    </>
    
  )
}

export default CharacterPage