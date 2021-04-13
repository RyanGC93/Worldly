import React, { useState,useEffect } from "react";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsFillTrashFill } from "react-icons/bs";


const settings = {
  autoplay: false,
  showThumbs: false
  // autoplaySpeed: 3000,
  // dots: true
};
/* Form requires ambassador id title descrition, cost, location(lon,lat) */
const Slide = ({photo,setPhotos,photos}) => {
  
  const [description,setDescription] = useState('')

  useEffect(() => {
setDescription(photo.description)
  },[photo.description])

  const updateDescription =(e) => {
    console.log(e.target.value)
    setDescription(e.target.value)
  }

  const cancelHandler = () => {
    setDescription(photo.description)
  }

  const deleteHandler = (e) => {
    console.log(e.target.value)
    if(photos.length === 1)return setPhotos([])
    let updatedArr = photos.filter(item => item.id !== photo.id);

   setPhotos(updatedArr)
  }

  const updateHandler = () => {
    console.log(photos)
    setPhotos(
      photos.map(item => 
          item.id === photo.id 
          ? {...item, description : "changed"} 
          : item 
  ))  
  console.log(photos)
  }



 return (
   <>
<div className={styles.carousel}>
              <div className={styles.carouselImgContainer}>
              <img className={styles.carouselImg} src={photo.src} alt='' />
              <BsFillTrashFill className={styles.trash} />
            </div>
<div>
              <div className={styles.group}>
              <label className={styles.label} htmlFor="description">
                Short Description
              </label>
        <div className={styles.textAreaContainer}>
          <textarea
            required
            className={styles.textInput}
            name="description"
            type="description"
            value={description}
            onChange={updateDescription}
          />
        </div>
      </div>
      <div onClick={updateHandler}>Update</div>
      <div onClick={cancelHandler}>Cancel </div>
      <div value={photo.id} onClick={deleteHandler}>Delete </div>
      </div>
            </div>
   </>
 )

}


const PhotoFormSlider = ({ photos, setPhotos }) => {

  
  return (
    <>
      <Carousel styling={{height:'50%'}} {...settings} >
        {photos.map((photo) => (
            <Slide key={photo.id} photos={photos} photo={photo} setPhotos={setPhotos} />

        ))}
      </Carousel>
    </>
  );
};

//     setItems(prevItems => [...prevItems, {
//   id: prevItems.length,
//   value: getRandomNumber()
// }]);

const PhotoForm = ({ setFormStep }) => {
  
  const [photos, setPhotos] = useState([]);
  const [url,setUrl] =useState('')
  const [file,setFile] = useState('')

  let [photoKey,setPhotoKey] = useState(0)

  const confirmHandler = () => {
      console.log(photos)
  }

  const onSubmit = () => {};
  const readUrl = (e) => {
    if (e.target.files[0]) {
      const src = URL.createObjectURL(e.target.files[0]);

      setFile(src)


      // setPhotos( prevState => [...prevState, newPhoto]);
      console.log(photos)
    }
  };
  const urlHandler = (e) =>{
    if(!e.target.value){
      setUrl(e.target.value)

    } 
      setUrl(e.target.value)

  }
  const addPhotoHandler = () => {
      let src
      (url) ? src=url : src=file
      let newPhoto = {
      id: photoKey,
      src: src,
      description: "sdsdsdsds"
    };
    setPhotos( prevState => [...prevState, newPhoto]);
    setUrl("")
    setFile("")
    let increaser = photoKey +=1
    setPhotoKey(increaser)
    document.getElementById('file-input').value = null

  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <PhotoFormSlider id='xxxxx' photos={photos} setPhotos={setPhotos} />
        <div className={styles.label}>Add a new photo </div>
        {photos && (
<div onClick={addPhotoHandler}>Add Photo</div>
        )}
      <div className={styles.photoOptions}>
        <div className={styles.group}>
          <label className={styles.label}>
            Choose a Photo
            <input id='file-input' type="file" className={`${styles.input} ${styles.fileInput}`} onChange={readUrl} />
          </label>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>
            From Url
            <input
            value={url}
            onChange={urlHandler}
              type="url"
              className={`${styles.input} ${styles.urlInput}`}
              // onChange={readUrl}
            />
          </label>
        </div>
     
      </div>
      {photos[1] && (
        <div onClick={confirmHandler}>
            Confirm
        </div>
      )}


    </form>
  );
};

export default PhotoForm;
