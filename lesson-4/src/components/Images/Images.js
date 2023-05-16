import { useEffect, useState } from "react";

function Images(props) {
  const [photos, setPhotos] = useState([]); // #1

  useEffect(() => {
    // #3
    getPhotos();
  }, []);

  async function getPhotos() {
    // #2
    const response = await fetch(
      "https://api.unsplash.com/photos/?client_id=wepuRCPJGdk1dBeQM7msS8osfuId-41cjfESOfFKYhM"
    );
    const data = await response.json();

    console.log(data);

    // data.forEach((photo) => {
    //   setPhotos([...photos, photo.urls.full]);
    // });
    setPhotos(data);
  }

  useEffect(() => {
    // #4 prosto dlya proverki
    console.log(photos);
  }, [photos]);

  const imagesTags = photos.map((photo) => {
    // #5
    return <img width={400} src={photo.urls.small}></img>;
  });

  return <div>{imagesTags}</div>; // #6
}

export default Images;
