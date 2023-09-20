import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFachada, postFachada} from "../../redux/actions";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import styled from './FormFachada.module.css'

// Import Cloudinary library for URL generation
import { Cloudinary } from "@cloudinary/url-gen";

// Initialize Cloudinary with your cloud name
const cloudName = "dnopf7dof"; // Replace with your actual cloud name
const cld = new Cloudinary({ cloud: { cloudName } });

function FormFachada() {
  const dispatch = useDispatch();
  const imagenes = useSelector((state) => state.fachada);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: [],
    description: ""
  });

  const handleRemoveImage = (imageUrl) => {
    setInput((prevInput) => ({
      ...prevInput,
      image: prevInput.image.filter((url) => url !== imageUrl),
    }));
  };

  const handleImageUpload = (event) => {
    console.log("Starting image upload...");
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "puertasEnVidrio"); // Replace with your upload preset

      console.log("Sending upload request...");
   fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
  method: "POST",
  body: formData,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }
    return response.json();
  })
  .then((data) => {
    console.log("Image upload successful:", data);
    setInput((prevInput) => ({
      ...prevInput,
      image: [...prevInput.image, data.secure_url],
    }));
  })
  .catch(error => {
    console.error('Error al subir la imagen:', error);
  });

    }
    
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postFachada(input))
    // Dispatch your Redux action here, if needed
    setInput({
      name: "",
      image: [],
      description: "",
    });
  };

  useEffect(()=>{
    dispatch(getFachada())
},[])

  return (
    <div className={styled.div}>
            <h1>Fachadas</h1>

      <div className={styled.cardContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <h4 className={styled.cardTitle}>
          Name Fachada:
          </h4>
          <input
            type="text"
            className={styled.formInput}

            value={input.name}
            name="name"
            onChange={handleChange}
            placeholder="Name..."
            required
          />
        </p>
        <p>
          <h4  className={styled.cardTitle}>
          Image Fachada:</h4>
          <input
         className={styled.formInput}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}

            disabled={input.image.length === 1}
          />
        </p>

        <div>
          {input.image?.map((imageUrl, index) => (
            <div key={index}>
              <Image
                publicId={imageUrl}
                cloudName={cloudName}
                dpr="auto"
                responsive
                width={400}
                height={400}                crop="scale"
                fetchFormat="auto"
                quality="auto"
                alt="Fachada"
              />
              <button onClick={() => handleRemoveImage(imageUrl)}>X</button>
            </div>
          ))}
        </div>

        <p>
          <h4 className={styled.cardTitle}>
          Description:
          </h4>
          <input
                     className={styled.formInput}

            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
            placeholder="Description..."
            required
          />
        </p>
        <button className={styled.formButton}  onSubmit={(e) => handleSubmit(e)} type="submit">Crear</button>
      </form>
     
      </div>
      <p>
      <Link to={`/imgfachadas`}>
        <button  className={styled.formButton}>ver fachadas</button>
      </Link>
      </p>
    </div>
  );
}

export default FormFachada;
