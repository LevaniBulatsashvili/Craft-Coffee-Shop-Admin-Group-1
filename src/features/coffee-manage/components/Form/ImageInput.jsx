import styles from "./styles/ImageInput.module.css";

function ImageInput({ imageRef }) {
  const onImageBtnClick = () => imageRef.current.click();

  return (
    <div className={styles["image-input"]}>
      <label htmlFor="image">Image</label>
      <button onClick={onImageBtnClick}>Upload Image</button>
      <input type="file" accept="image/*" ref={imageRef} hidden />
    </div>
  );
}

export default ImageInput;
