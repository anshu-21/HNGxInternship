import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery";
import { fetchPexelsImages } from "../PexelsService";
import Loading from "../Loading";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPhotos = async () => {
    try {
      const fetchedPhotos = await fetchPexelsImages();
      setPhotos(fetchedPhotos);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-semibold mb-4">Photo Gallery</h1>
        <ImageGallery photos={photos} setPhotos={setPhotos} />
      </div>
    </>
  );
};

export default Home;
