// import Fuse from "fuse.js";
import { useState } from "react";
import { sanityClient } from "sanity:client";

async function getFilteredPosts(searchToken) {
  const groqQuery = `
      *[(
        _type == "listings"
        && !(_id in path("drafts.**"))
        && (
          title match "*${searchToken}*"
          || pt::text(body) match "*${searchToken}*"
          || excerpt match "*${searchToken}*"
        )
      )]
      | score(
        pt::text(body) match "*${searchToken}*",
        boost(title match "*${searchToken}*", 3),
        boost(excerpt match "*${searchToken}*", 2)
      ){
        _id,
        "slug": slug.current,
        title,
        description,
        excerpt,
        "image": gallery[0].asset -> url,
        renting,
        rentPrice,
        selling,
        sellPrice
      }
    `;

  const filteredPostsResult = await sanityClient.fetch(groqQuery);
  return filteredPostsResult;
}

function SearchBar() {
  const [currentPostsResult, setCurrentPostsResult] = useState(null);

  const handleOnChange = async (event) => {
    const searchToken = event.target.value;
    if (searchToken.length > 0) {
      getFilteredPosts(searchToken).then((posts) => {
        setCurrentPostsResult(posts);
      });
    } else {
      setCurrentPostsResult(null);
    }
  };

  return (
    <>
      <div>
        <p className="bg-secondary p-3 rounded-xl">
          <input
            type="search"
            placeholder="Cerca ora.."
            onChange={handleOnChange}
            aria-label="Cerca"
            className="w-full p-2 rounded-lg"
          />
        </p>
      </div>
      {currentPostsResult ? (
        <div className="overflow-auto rounded-md mt-4 -mb-3  max-h-96">
          <ul className=" flex flex-col gap-y-10 bg-[#EAEBED] px-4 ">
            {currentPostsResult.map((post) => (
              <li key={post._id}>
                <a href={'/immobili/' + post.slug} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center my-5 gap-5">
                <div className="">
                  <img src={post.image} alt={`Immagine di: ${post.title}`} className="rounded-sm" />
                </div>
                <div className="flex flex-col justify-evenly xl:col-span-2">
                  <div className="mb-4 flex sm:flex-row flex-col items-left justify-between">
                    <div>
                      <h2 className="font-semibold text-lg">{post.title}</h2>
                      <h3>{post.description}</h3>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary/90 text-lg">
                      {post.renting ? (
                        <span>€ {post.rentPrice} / Mese</span>
                      ) : (!post.renting && !post.selling) ? (
                        <span>Su Contatto</span>
                      ) : !post.renting ? (
                        <span>€ {post.sellPrice}</span>
                      ) : (<span>Da definire</span>)
                      }
                      </p>  
                    </div>
                  </div>
                  <p >{post.excerpt}</p>
                </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center mt-2 text-black">Nessun Risultato</p>
      )}
    </>
  );
}

export default SearchBar;





