// components/TestimonialSlider.tsx
import React, { useEffect, useState } from "react";
import "./Testimonial.css";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    content: "This product has changed my life! Highly recommended.",
    image: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Benson",
    content: "Fantastic experience and great customer support.",
    image: "https://via.placeholder.com/100",
    rating: 4,
  },
  {
    id: 3,
    name: "Rachel Lee",
    content: "Very easy to use and extremely helpful.",
    image: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    content: "I love this service. Everything works perfectly!",
    image: "https://via.placeholder.com/100",
    rating: 4,
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="testimonial-slider">
      {visibleTestimonials.map((t) => (
        <div className="testimonial-card" key={t.id}>
          <img src={t.image} alt={t.name} className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-text">"{t.content}"</p>
            <p className="testimonial-name">- {t.name}</p>
            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="star">
                  &#9733;
                </span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="star empty">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
