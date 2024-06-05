const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <App />
);

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MainSections />
    </div>
  );
}

function Header() {
  return (
    <header className="hero">
      <nav className="navbar">
        <NavbarLink href="#home" text="Home" />
        <NavbarLink href="#about" text="About" />
        <NavbarLink href="#services" text="Services" />
        <NavbarLink href="#gallery" text="Gallery" />
        <NavbarLink href="#testimonials" text="Testimonials" />
        <NavbarLink href="#contact" text="Contact" />
      </nav>
      <div className="hero-content">
        <h1>Welcome to Our Hotel</h1>
        <p>Estelar Hotel Cartagena</p>
        <button className="hero-button">Centro de Convenciones</button>
      </div>
    </header>
  );
}

function NavbarLink({ href, text }) {
  return <a className="navbar-link" href={href}>{text}</a>;
}

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <h2>Bienvenidos a nuestro Hotel</h2>
      <p>OFERTAS ESTELAR CARTAGENA DE INDIAS HOTEL & CENTRO DE CONVENCIONES EN CARTAGENA DE INDIAS.</p>
      <button>Más Información</button>
    </section>
  );
}

function MainSections() {
  return (
    <main>
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <img src="https://source.unsplash.com/800x600/?hotel,lobby" alt="Hotel Lobby" className="section-image" />
        <div className="section-text">
          <h2>Acerca de</h2>
          <p>El hotel se encuentra a tan solo 15 minutos del Aeropuerto internacional Rafael Núñez, a solo 5 minutos del Centro Histórico y del cultural barrio Getsemaní.</p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section section-services">
      <h2>Nuestros Servicios</h2>
      <div className="services-list">
        <ServiceItem
          imageUrl="https://source.unsplash.com/400x300/?hotel,room-service"
          title="Recepción 24 horas"
          description="Nuestro hotel se caracteriza por brindar siempre una atención directa, eficaz y totalmente personalizada. Tenemos un lobby bar para que cada huésped reciba el mejor trato posible durante toda su estadía."
        />
        <ServiceItem
          imageUrl="https://source.unsplash.com/400x300/?spa"
          title="Spa & Wellness"
          description="El relax y el bienestar son clave en nuestro hotel en Cartagena, donde podrá disfrutar de una gran piscina infinity, área de spa, sauna, baño turco, Jacuzzi, masajes y sala de belleza."
        />
        <ServiceItem
          imageUrl="https://source.unsplash.com/400x300/?restaurant"
          title="Gimnasio"
          description="Mantenerse en forma siempre, incluso en vacaciones, es muy fácil en el ESTELAR Cartagena de Indias Hotel & Centro de Convenciones gracias a su sala de ejercicios totalmente equipada."
        />
      </div>
    </section>
  );
}

function ServiceItem({ imageUrl, title, description }) {
  return (
    <div className="service-item">
      <img src={imageUrl} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="section section-gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <GalleryImage imageUrl="https://source.unsplash.com/400x300/?hotel,room" />
        <GalleryImage imageUrl="https://source.unsplash.com/400x300/?hotel,pool" />
        <GalleryImage imageUrl="https://source.unsplash.com/400x300/?hotel,lobby" />
        <GalleryImage imageUrl="https://source.unsplash.com/400x300/?hotel,restaurant" />
      </div>
    </section>
  );
}

function GalleryImage({ imageUrl }) {
  return <img src={imageUrl} alt="Gallery" className="gallery-image" />;
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section-testimonials">
      <h2>Testimonios</h2>
      <div className="testimonials-list">
        <TestimonialItem
          quote="Para los que viajan en familia a Cartagena, la piscina sin fin de nuestro hotel será el lugar para aprovechar hasta el último rayo de sol frente al mar."
          author="Caramelito Ruiz"
        />
        <TestimonialItem
          quote="Gastronomía selecta, con platos clásicos locales y especialidades internacionales. Su servicio se completa con un lobby bar y un restaurante especial para eventos."
          author="Yanfri Anaya"
        />
        <TestimonialItem
          quote="Somos un alojamiento que admite mascotas. Porque sabemos que es importante para que toda la familia pueda disfrutar de sus días, tener a nuestros animalillos cerca."
          author="Maja Sanchez"
        />
      </div>
    </section>
  );
}

function TestimonialItem({ quote, author }) {
  return (
    <div className="testimonial-item">
      <p>"{quote}"</p>
      <p><strong>- {author}</strong></p>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <h2>Contactanos</h2>
      <p>Correo: hotelEstelar@gmail.com llamar (123) 456-7890</p>
    </section>
  );
}