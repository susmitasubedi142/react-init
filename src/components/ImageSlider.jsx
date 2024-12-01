import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImageSlider() {
  
  const carouselRef = useRef(null);
  const notify = () => toast("Wow so easy !");

  function scrollCarousel(direction) {
    
    if (carouselRef.current) {
      // Calculate the scroll amount dynamically based on the width of the images
      const imageWidth = carouselRef.current.firstChild.offsetWidth + 24; // Image width + gap (24px for "gap-6")
      
      
      // Scroll by one image width in the specified direction
      carouselRef.current.scrollBy({
        left: direction * imageWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="h-screen flex justify-center items-center p-10 py-[32px] px-[300px]">
      <div className="border shadow-xl overflow-hidden rounded-lg">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 p-6 overflow-x-auto "
        >
          <img
            className="w-[350px] h-[300px] object-cover flex  "
            src="/images/dog.jpg"
            alt="Dog 1"
           
          />
          
          <img
            className="w-[350px] h-[300px] object-cover "
            src="/images/dog.jpg"
            alt="Dog 2"
          />
          <img
            className="w-[350px] h-[300px] object-cover "
            src="/images/dog.jpg"
            alt="Dog 3"
          />
          <img
            className="w-[350px] h-[300px] object-cover flex-shrink-0"
            src="/images/dog.jpg"
            alt="Dog 4"
          />
          
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => scrollCarousel(-1)}
            className="border px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            className="border px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            <ChevronRight className='text-red-500' />
          </button>
        </div>
        <div className="mt-4 text-center">
          <button 
            onClick={notify} 
            className="px-6 py-2 bg-blue-500 text-white rounded-md"
          >
            Notify !
          </button>
          <ToastContainer />
        </div>
              </div>
    </div>
  );
}
