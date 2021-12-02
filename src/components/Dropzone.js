export const MyDropzone = (props) => {
  const handleFetch = (e) => {
    console.log(props)
  }

  return (
    <div className='dropzone' >
      <input
        type="file"
        onClick={handleFetch}
        accept="example/json, image/json"
      />
      <div className="dropzone__image">
        <i className='fas fa-cloud-download-alt'></i>
      </div>
      <p className="dropzone__text">Click or drag image file to this area to upload</p>
    </div>
  );
};
