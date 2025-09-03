"use client";
import { useState } from "react";
// ...existing code...

export default function Gallery() {
  const [openImage, setOpenImage] = useState(null);
  const handleOpen = (imgSrc) => setOpenImage(imgSrc);
  const handleClose = () => setOpenImage(null);

  return (
    <section className="gallery" id="gallery">
      <h2>My Gallery</h2>
      <div className="gallery-grid">
        <div onClick={() => handleOpen("/gallery1.jpg")}>
          <img src="/gallery1.jpg" alt="Gallery 1" />
          <p>Kauruko</p>
        </div>
        <div onClick={() => handleOpen("/gallery2.jpg")}>
          <img src="/gallery2.jpg" alt="Gallery 2" />
          <p></p>
        </div>
        <div onClick={() => handleOpen("/gallery3.jpg")}>
          <img src="/gallery3.jpg" alt="Gallery 3" />
          <p>Furina</p>
        </div>
      </div>

      {openImage && (
        <div className="modal" onClick={handleClose}>
          <span className="modal-close" onClick={handleClose}>&times;</span>
          <img src={openImage} alt="Preview" className="modal-content" />
        </div>
      )}
    </section>
  );
}