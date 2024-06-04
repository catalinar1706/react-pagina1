const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( 
    <>
    <Header />
    <HeroSection />
 
    </>
);


function Header(){
    return (
        <div className="App">
          <header className="hero">
            <nav className="navbar">
              <a className="navbar-link" href="#home">Home</a>
              <a className="navbar-link" href="#about">About</a>
              <a className="navbar-link" href="#services">Services</a>
              <a className="navbar-link" href="#gallery">Gallery</a>
              <a className="navbar-link" href="#testimonials">Testimonials</a>
              <a className="navbar-link" href="#contact">Contact</a>
            </nav>
            <div className="hero-content">
              <h1>Welcome to Our Hotel</h1>
              <p>Estelar Hotel Cartagena</p>
              <button className="hero-button">Centro de Convenciones</button>
            </div>
          </header>
          <main>
            <section id="about" className="section section-about">
              <div className="container">
                <img src="https://source.unsplash.com/800x600/?hotel,lobby" alt="Hotel Lobby" className="section-image" />
                <div className="section-text">
                  <h2>Acerca de</h2>
                  <p>El hotel se encuentra a tan solo 15 minutos del Aeropuerto internacional Rafael Núñez, a solo 5 minutos del Centro Histórico y del cultural barrio Getsemaní.</p>
                </div>
              </div>
            </section>
            <section id="services" className="section section-services">
              <h2>Nuestros Servicios</h2>
              <div className="services-list">
                <div className="service-item">
                  <img src="https://source.unsplash.com/400x300/?hotel,room-service" alt="Room Service" className="service-image" />
                  <h3>Recepción 24 horas</h3>
                  <p>Nuestro hotel se caracteriza por brindar siempre una atención directa, eficaz y totalmente personalizada. Tenemos un lobby bar para que cada huésped reciba el mejor trato posible durante toda su estadía.</p>
                </div>
                <div className="service-item">
                  <img src="https://source.unsplash.com/400x300/?spa" alt="Spa" className="service-image" />
                  <h3>Spa & Wellness</h3>
                  <p>El relax y el bienestar son clave en nuestro hotel en Cartagena, donde podrá disfrutar de una gran piscina infinity, área de spa, sauna, baño turco, Jacuzzi, masajes y sala de belleza.</p>
                </div>
                <div className="service-item">
                  <img src="https://source.unsplash.com/400x300/?restaurant" alt="Fine Dining" className="service-image" />
                  <h3>Gimnasio</h3>
                  <p>Mantenerse en forma siempre, incluso en vacaciones, es muy fácil en el ESTELAR Cartagena de Indias Hotel & Centro de Convenciones gracias a su sala de ejercicios totalmente equipada.</p>
                </div>
              </div>
            </section>
            <section id="gallery" className="section section-gallery">
              <h2>Gallery</h2>
              <div className="gallery-grid">
                <img src="https://source.unsplash.com/400x300/?hotel,room" alt="Room" className="gallery-image" />
                <img src="https://source.unsplash.com/400x300/?hotel,pool" alt="Pool" className="gallery-image" />
                <img src="https://source.unsplash.com/400x300/?hotel,lobby" alt="Lobby" className="gallery-image" />
                <img src="https://source.unsplash.com/400x300/?hotel,restaurant" alt="Restaurant" className="gallery-image" />
              </div>
            </section>
            <section id="testimonials" className="section section-testimonials">
              <h2>Testimonios</h2>
              <div className="testimonials-list">
                <div className="testimonial-item">
                  <p>"Para los que viajan en familia a Cartagena, la piscina sin fin de nuestro hotel será el lugar para aprovechar hasta el último rayo de sol frente al mar."</p>
                  <p><strong>- Caramelito ruiz</strong></p>
                </div>
                <div className="testimonial-item">
                  <p>"Gastronomía selecta, con platos clásicos locales y especialidades internacionales. Su servicio se completa con un lobby bar y un restaurante especial para eventos."</p>
                  <p><strong>- Yanfri anaya</strong></p>
                </div>
                <div className="testimonial-item">
                  <p>"Somos un alojamiento que admite mascotas. Porque sabemos que es importante para que toda la familia pueda disfrutar de sus días, tener a nuestros animalillos cerca."</p>
                  <p><strong>- Maja sanchez</strong></p>
                </div>
              </div>
            </section>
            <section id="contact" className="section section-contact">
              <h2>Contactanos</h2>
              <p>Correo: hotelEstelar@gmail.com llamar (123) 456-7890</p>
            </section>
          </main>
        </div>
      );
    }
 

function HeroSection (){
    return (
    <section id="home" className="hero-section">
    <h2>Bienvenidos a nuestro Hotel</h2>
    <p>OFERTAS ESTELAR CARTAGENA DE INDIAS HOTEL & CENTRO DE CONVENCIONES EN CARTAGENA DE INDIAS.</p>
    <button>Más Información</button>
  </section>
    )
}


