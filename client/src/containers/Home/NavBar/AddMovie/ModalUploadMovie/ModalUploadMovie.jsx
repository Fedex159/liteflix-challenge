import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadError from "./UploadError/UploadError";
import UploadProgress from "./UploadProgress/UploadProgress";
import UploadInput from "./UploadInput/UploadInput";
import UploadMessage from "./UploadMessage/UploadMessage";
import cerrar from "../../../../../assets/imgs/cerrar.png";
import s from "./ModalUploadMovie.module.css";

function ModalUploadMovie({ handleModal }) {
  const [movie, setMovie] = useState({ title: "", img: "" });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [cancelToken, setCancelToken] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
    if (Object.values(movie).every((v) => v !== "")) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [movie]);

  const onProgress = (progressEvent, file) => {
    const size = file.size;
    const actualSize = progressEvent.loaded;
    const percentage = (actualSize * 100) / size;

    setUploadPercentage(() => {
      if (percentage > 100) return 100;
      return Math.ceil(percentage);
    });
  };

  const cancelUpload = () => {
    if (cancelToken) {
      cancelToken.cancel();
      setIsUploading(false);
      setUploadPercentage(0);
    }
  };

  const retryUpload = () => {
    setIsUploading(false);
    setUploadError(false);
    setUploadPercentage(0);
  };

  const uploadImage = (file) => {
    const token = axios.CancelToken;
    const source = token.source();

    const config = {
      onUploadProgress: (progressEvent) => onProgress(progressEvent, file),
      cancelToken: source.token,
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "butipetx");

    setIsUploading(true);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/fedex159/image/upload",
        formData,
        config
      )
      .then((response) =>
        setMovie((prev) => ({ ...prev, img: response.data.secure_url }))
      )
      .catch((err) => console.log(err));

    setCancelToken(source);
  };

  const handleInputFile = (event) => {
    uploadImage(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    let file = null;
    if (event.dataTransfer.items[0].kind === "file") {
      file = event.dataTransfer.items[0].getAsFile();
      uploadImage(file);
    }
  };

  const handleChange = (event) => {
    setMovie((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleSubmit = () => {
    if (enableSubmit) {
      // Hacer axios post
      // Manejar el error
      setUploaded(true);
    }
  };

  return (
    <div className={s.container}>
      {!uploaded ? (
        <div className={s.box}>
          <button className={s.close} onClick={handleModal}>
            <img src={cerrar} alt="cerrar" />
          </button>
          <h4 className={s.boxTitle}>AGREGAR PELÍCULA</h4>

          {/* -------------- Upload Error --------------- */}
          {uploadError ? <UploadError retryUpload={retryUpload} /> : null}
          {/* ------------------------------------------- */}

          {/* -------------- Upload Progress ----------------*/}
          {isUploading ? (
            <UploadProgress
              uploadPercentage={uploadPercentage}
              cancelUpload={cancelUpload}
            />
          ) : null}
          {/* -----------------------------------------------*/}

          {/*---------------- Upload input --------------------*/}
          {!isUploading && !uploadError ? (
            <UploadInput
              handleDrop={handleDrop}
              handleInputFile={handleInputFile}
            />
          ) : null}
          {/*--------------------------------------------------*/}

          <input
            name="title"
            placeholder="TÍTULO"
            value={movie.title}
            onChange={handleChange}
            className={s.inputTitle}
          />
          <button
            className={`${s.uploadButton} ${
              !enableSubmit && s.uploadButtonOff
            }`}
            onClick={handleSubmit}
          >
            SUBIR PELÍCULA
          </button>
        </div>
      ) : (
        <UploadMessage onClick={handleModal} title={movie.title} />
      )}
    </div>
  );
}

export default ModalUploadMovie;