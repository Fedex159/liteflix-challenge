import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UploadError from "./UploadError/UploadError";
import UploadProgress from "./UploadProgress/UploadProgress";
import UploadInput from "./UploadInput/UploadInput";
import UploadMessage from "./UploadMessage/UploadMessage";
import cerrar from "../../../../../assets/imgs/cerrar.png";
import { addMovieToDB } from "../../../../../utils";
import { StateGlobal } from "../../../Home";
import s from "./ModalUploadMovie.module.css";

function ModalUploadMovie({ handleModal }) {
  const { setMyMovies } = useContext(StateGlobal);
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
    setUploadError(false);
    setUploadPercentage(0);
  };

  const enableError = () => {
    setIsUploading(false);
    setUploadError(true);
    setMovie((prev) => ({ ...prev, img: "" }));
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
        "https://api.cloudinary.com/v1_1/fedex159/image/upload/",
        formData,
        config
      )
      .then((response) =>
        setMovie((prev) => ({
          ...prev,
          img: response.data.secure_url
            .split("upload")
            .join("upload/c_scale,w_400"),
        }))
      )
      .catch((err) => {
        console.log(err.message);
        err.message && enableError();
      });

    setCancelToken(source);
  };

  const handleInputFile = (event) => {
    if (/image/gi.test(event.target.files[0].type)) {
      uploadImage(event.target.files[0]);
    } else {
      enableError();
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    let file = null;
    if (event.dataTransfer.items[0].kind === "file") {
      file = event.dataTransfer.items[0].getAsFile();
      if (/image/gi.test(file.type)) {
        uploadImage(file);
      } else {
        enableError();
      }
    }
  };

  const handleChange = (event) => {
    setMovie((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleSubmit = () => {
    if (enableSubmit) {
      addMovieToDB(movie)
        .then((data) => {
          setMyMovies((prev) => [...prev, data]);
          setUploaded(true);
        })
        .catch((err) => {
          enableError();
        });
    }
  };

  return (
    <div className={s.container}>
      {!uploaded ? (
        <div className={s.box}>
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
          <button className={s.close} onClick={handleModal}>
            <img src={cerrar} alt="cerrar" />
            <h4>Salir</h4>
          </button>
        </div>
      ) : (
        <UploadMessage onClick={handleModal} title={movie.title} />
      )}
    </div>
  );
}

export default ModalUploadMovie;
