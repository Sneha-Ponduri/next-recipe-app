// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"

// import Link from 'next/link'


// export default function RecipeList({recipeList}){
//     console.log(recipeList);
//     return <div>
//         <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
//             <h2 className="text-4xl font-bold text-gray-800 mb-12"></h2>
//             <Link href={'/'}>Go Home</Link>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {
//                     recipeList && recipeList.length >0 ?
//                     recipeList.map(recipe=> <Link href={`/recipe-list/${recipe.id}`}>
//                     <Card>
//                         <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale[1.1] transition-all">
//                             <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                                 <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover object-full"></img>
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
//                                 <div className="mt-4 flex items-center flex-wrap gap-2">
//                                     <p className="text-lg text-gray-600">Rating:{recipe.rating}</p>
//                                     <div className="ml-auto">
//                                         <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </CardContent>
//                     </Card>
//                     </Link>)
//                     :null
//                 }
//             </div>
            
//         </div>
//     </div>
            
// }
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import Link from "next/link";
  
  export default function RecipeList({ recipeList }) {
    console.log(recipeList);
    return (
      <div className="min-h-screen">
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
          <h2 className="text-4xl font-bold text-black-100 mb-12">Recipe List</h2>
          
          <Link
            href={'/'}
            className="bg-green-500 text-white px-4 py-2 rounded-md inline-block mb-8 hover:bg-green-700 transition-all"
          >
            Go Home
          </Link>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipeList && recipeList.length > 0 ? (
              recipeList.map((recipe) => (
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-gray-100">No recipes found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  