function ImageContainer(props, { className }) {
  return (
    <div className={`flex flex-1 justify-center items-center ${className}`}>
      {props.children}
    </div>
  );
}

export default ImageContainer;
