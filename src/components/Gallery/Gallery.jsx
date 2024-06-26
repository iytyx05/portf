import React from 'react';
import './Gallery.scss';
import gallery1 from'../../assets/img/gallery1.jpg';
import gallery2 from'../../assets/img/gallery2.jpg';
import gallery3 from'../../assets/img/gallery3.jpg';
import gallery4 from'../../assets/img/gallery4.jpg';
import gallery5 from'../../assets/img/gallery5.jpg';
import gallery6 from'../../assets/img/gallery6.jpg';
import gallery7 from'../../assets/img/gallery7.jpg';
import gallery8 from'../../assets/img/gallery8.jpg';
import gallery9 from'../../assets/img/gallery9.jpg';
import gallery10 from'../../assets/img/gallery10.jpg';
import gallery11 from'../../assets/img/gallery11.jpg';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
Fancybox.bind('[data-fancybox="gallery"]', {

});

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery-title">Галерея</h2>
                <div className="gallery-list">
                    <a className="gallery-list-item" href={gallery1} data-fancybox={"gallery"}>
                        <img src={gallery1} alt="leaves" />
                    </a>
                    <a className="gallery-list-item" href={gallery2} data-fancybox={"gallery"}>
                        <img src={gallery2} alt="model" />
                    </a>
                    <a className="gallery-list-item" href={gallery3} data-fancybox={"gallery"}>
                        <img src={gallery3} alt="music" />
                    </a>
                    <a className="gallery-list-item" href={gallery4} data-fancybox={"gallery"}>
                        <img src={gallery4} alt="animals" />
                    </a>
                    <a className="gallery-list-item" href={gallery5} data-fancybox={"gallery"}>
                        <img src={gallery5} alt="moda" />
                    </a>
                    <a className="gallery-list-item" href={gallery6} data-fancybox={"gallery"}>
                        <img src={gallery6} alt="weather" />
                    </a>
                    <a className="gallery-list-item" href={gallery7} data-fancybox={"gallery"}>
                        <img src={gallery7} alt="black" />
                    </a>
                    <a className="gallery-list-item" href={gallery8} data-fancybox={"gallery"}>
                        <img src={gallery8} alt="rooster" />
                    </a>
                    <a className="gallery-list-item" href={gallery9} data-fancybox={"gallery"}>
                        <img src={gallery9} alt="yellow" />
                    </a>
                    <a className="gallery-list-item" href={gallery10} data-fancybox={"gallery"}>
                        <img src={gallery10} alt="mountains" />
                    </a>
                    <a className="gallery-list-item" href={gallery11} data-fancybox={"gallery"} >
                        <img src={gallery11} alt="flowers" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
