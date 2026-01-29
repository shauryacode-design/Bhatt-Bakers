"use client";
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const videos = document.querySelectorAll<HTMLVideoElement>(".cake-video");

    videos.forEach(video => {

      // MOBILE: autoplay always
      if (isMobile && video.classList.contains("mobile-video")) {
        video.muted = true;
        video.playsInline = true;

        video.addEventListener("loadedmetadata", () => {
          video.play().catch(() => { });
        });

        return; // ⛔ stop here (NO hover logic on mobile)
      }

      // DESKTOP: hover play
      if (!isMobile && video.classList.contains("desktop-video")) {
        video.pause();

        video.addEventListener("mouseenter", () => {
          video.play();
        });

        video.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "918126282845"; 
    const message = "Hi, I visited your website and would like to order a cake 🎂";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="complete">
      <div className="website">
        <div className="hero">
          <div className="vid">
            <div className="desktop-vid">
              <video src="/videos/0001-0200.mp4" width={"300px"} autoPlay muted loop playsInline></video>
            </div>
            <div className="mobile-vid">
              <video src="/videos/Mobile_bg.mp4" width={"300px"} autoPlay muted loop playsInline></video>
            </div>
          </div>
          <div className="hero-content">
            <div className="name"><p>Bhatt Bakers</p></div>
            <button
              type="button"
              onClick={openWhatsApp}
              className="hero-whatsapp bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              💬 Order on WhatsApp
            </button>
            <h1>Fresh Custom Cakes in Dehradun</h1>

            <p>Birthday • Wedding • Anniversary • Same-Day Orders Available</p>
          </div>
        </div>
        <div className="second" id="section2">
          <div className="section2-head">
            <h1>Some of Our Services</h1>
          </div>

          <div className="models">

            <div className="card wedding">
              <video
                src="/videos/wedding_cake0001-0150.mkv"
                className="cake-video desktop-video"
                muted
                loop
                playsInline
              />
              <img className="mobile-view mobile-wedding" src="/images/wedding_cake.png" alt="" />

              <h1>Wedding Cake</h1>
              <p className="wedding-para">
                Elegant designs crafted for your special day. <br />
                Custom tiers, fine details, and timeless flavors.
              </p>
              <p>Starting from <span style={{ fontWeight: '600' }}>₹1,999</span></p>
              <a href="#contact">Order Now</a>
            </div>

            <div className="card birthday">
              <video
                src="/videos/birthdayCake_model0001-0150.mkv"
                className="cake-video desktop-video"
                muted
                loop
                playsInline
              />
              <img className="mobile-view mobile-birthday" src="/images/Birthday_cake.png" alt="" />

              <h1>Birthday Cake</h1>
              <p>
                Fun, flavorful cakes made to celebrate every moment. <br />
                Designed to match your theme and taste.
              </p>
              <p>Starting from <span style={{ fontWeight: '600' }}>₹219</span></p>
              <a href="#contact">Order Now</a>
            </div>

            <div className="card pastry">
              <video
                src="/videos/Pastry_model0001-0150.mkv"
                className="cake-video desktop-video"

                muted
                loop
                playsInline
              />
              <img className="mobile-view mobile-pastry" src="/images/Pastry.png" alt="" />

              <h1>Pastry</h1>
              <p>
                Freshly baked pastries with rich textures and bold flavors. <br />
                Perfect for quick treats and sweet cravings.
              </p>
              <p>Starting from <span style={{ fontWeight: '600' }}>₹15</span></p>
              <a href="#contact">Order Now</a>
            </div>

          </div>
        </div>
        <div className="third" id="why-us">
          <div className="section1">
            <div className="head">
              <h1>Why Choose Us</h1>
            </div>
            <div className="speaciality-cards">
              <div className="cards">
                <h1>Freshly Baked Daily</h1>
                <p>Baked every morning — no frozen stock.</p>
              </div>
              <div className="cards">
                <h1>Custom Cake Designs</h1>
                <p>Share your idea, we design it for you.</p>
              </div>
              <div className="cards">
                <h1>Premium Ingredients</h1>
                <p>No cheap cream or artificial taste.</p>
              </div>
              <div className="cards">
                <h1>Made with Care</h1>
                <p>Your cake, exactly when you need it.</p>
              </div>
            </div>
            <h2>⭐ Rated 4.9+ on Google</h2>
          </div>
        </div>
        <div className="fourth" id="contact">
          <div className="contact">
            <h1>Get In Touch</h1>

            <div className="contact-info">
              <p><span className="contact-span">📞 Call:</span> 91+ 8126282845</p>
              <p><span className="contact-span">✉️ Email:</span> rakeshsan9@gmail.com</p>
              <p><span className="contact-span">🕘 Open:</span> 10 AM – 10 PM (All Days)</p>

              <button onClick={openWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                Order on WhatsApp
              </button>
            </div>
          </div>

          <div className="location">
            <h1>Location</h1>

            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.675296371812!2d78.03940837556483!3d30.331752474780288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929caf35c238d%3A0x804caef35476f0ed!2sBhatt%20Bakers!5e0!3m2!1sen!2sin!4v1769614097450!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              <p className="address">
                <strong>📍 Bhatt Bakers</strong><br />
                Neshvilla Road, Dobhalwala<br />
                Dehradun – 248001
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
              <h2>Bhatt Bakers</h2>
              <p>
                Trusted by 500+ happy customers in Dehradun
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#top">Home</a>
              <a href="#section2">Services</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>📞 +91 8126282845</p>
              <p>📧 rakeshsan9@gmail.com</p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="footer-whatsapp bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                💬 Order on WhatsApp
              </button>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Bhatt Bakers. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}
