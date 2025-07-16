import { ExternalLink } from "lucide-react"
import { FaCameraRetro, FaRegSmileBeam, FaPhotoVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiLink, CiGrid41, CiGrid2H, CiClock1, CiImageOn } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const formules = [
  {
    id: 1,
    title: "Formule Starter",
    description: "Formule simple pour les évènements avec blablal, les photos numériques sont comprises en illimité.",
    time: "3h",
    img_number: "200",
    icon: <FaCameraRetro size={40} className="mx-auto mb-4" />,
    price: "390"
    // image: "/projects/Project - Mask Detection.png",
    // demoUrl:"#..."
  },
  {
    id: 2,
    title: "Formule Medium",
    description: "Big data pipeline analyzing mobile network coverage in France using Hadoop, Kafka, Spark, and Opensearch. Includes visualization and processing of large-scale geospatial data from ANFR.",
    time: "4h",
    img_number: "400",
    icon: <FaPhotoVideo size={40} className="mx-auto mb-4" />,
    price: "490"
    // image: "/projects/Project - French Mobile.png",
  },
  {
    id: 3,
    title: "Formule Premium",
    description: "A computer vision system built with TensorFlow/Keras to detect and classify animal faces. Demonstrates convolutional neural networks applied to wildlife image recognition.",
    time: "5h",
    img_number: "600",
    icon: <FaRegSmileBeam size={40} className="mx-auto mb-4" />,
    price: "590"
    // image: "/projects/Project - Animal face recognition.png",
  },
];


export const ServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + formules.length) % formules.length);
  };

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % formules.length);
  };

  const gridClass = "flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible px-2 -mx-2";

  return <section id="services" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Nos {" "}
        <span className="text-primary">
           Formules
        </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        </p>

        <div className="block md:hidden text-center mb-6 relative">
          <div className="flex justify-center w-full px-4">
            <div className="relative w-[360px] h-[380px]">
              {formules.map((formule, index) => (
                <div
                  key={formule.id}
                  className={`absolute top-0 w-[360px] h-[360px] mb-6 transition-all duration-500 px-8 py-10 rounded-lg shadow-md text-center bg-white text-black backdrop-blur-sm transform ${
                    index === currentIndex
                      ? 'translate-x-0 z-20 opacity-100 scale-100'
                      : (index === (currentIndex - 1 + formules.length) % formules.length)
                      ? '-translate-x-full z-10 opacity-40 scale-95'
                      : (index === (currentIndex + 1) % formules.length)
                      ? 'translate-x-full z-10 opacity-40 scale-95'
                      : 'opacity-0'
                  }`}
                >
                  {formule.icon}
                  <h3 className="text-xl font-semibold mb-2">{formule.title}</h3>
                  <p className="text-sm">{formule.description}</p>
                  <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-3">
                    <CiClock1 className="text-primary" size={20} />
                    <span>{formule.time}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-1">
                    <CiImageOn className="text-primary" size={20} />
                    <span>{formule.img_number}photos</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-xl font-semibold text-primary mt-1 mb-6">
                    <span className="text-black font-normal text-sm">À partir de</span>
                    <span>{formule.price}€</span>
                  </div>
                </div>
              ))}

              <button
                onClick={handlePrev}
                className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 hover:bg-primary/90 transition-transform duration-200"
              >
                <FaChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 hover:bg-primary/90 transition-transform duration-200"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-12">
          {formules.map((formule) => (
            <div
              key={formule.id}
              className="bg-white text-black rounded-lg px-10 py-12 text-center shadow-md hover:scale-105 transition-transform duration-300 w-full md:w-[360px] h-[360px] mb-6"
            >
              {formule.icon}
              <h3 className="text-xl font-semibold mb-2">{formule.title}</h3>
              <p className="text-sm">{formule.description}</p>
              <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-3">
                <CiClock1 className="text-primary" size={20}/>
                <span>{formule.time}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-1 mb-6">
                <CiImageOn className="text-primary" size={20}/>
                <span>{formule.img_number} photos</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-xl font-semibold text-primary mt-1 mb-6">
                <span className="text-black font-normal text-sm">À partir de</span>
                <span>{formule.price}€</span>
              </div>
            </div>
          ))}
        </div>

    </div>
  </section>
}