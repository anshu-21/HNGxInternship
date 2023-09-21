import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import ImageGallery from "../ImageGallery";
import { fetchSearchResults } from "../PexelsService";
import Loading from "../Loading";

function Search() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { tag } = useParams();

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const fetchedPhotos = await fetchSearchResults(tag);
        setPhotos(fetchedPhotos);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [tag]);

  return (
    <div>
      <Navbar />
      {isLoading && <Loading />}
      <div className="container mx-auto">
        <h1 className="text-2xl text-slate-800 font-medium px-3">
          Showing results for: <span className="font-bold ">{tag}</span>
        </h1>
        <ImageGallery photos={photos} setPhotos={setPhotos} />
      </div>
    </div>
  );
}

export default Search;
