// import Image from "next/image";
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
      
        
//        <h1>Welcome to Recipe App</h1>
//        <Link href={'/recipe-list'}>Explore Recipes</Link>
      
      
//     </div>
//   );
// }
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundColor: 'black' }}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-red-600 mb-6">Welcome to Recipe App</h1>
        <Link href={'/recipe-list'} className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700">
          Explore Recipes
        </Link>
      </div>
    </div>
  );
}
