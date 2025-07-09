import { ExternalLink } from "lucide-react"
import { FaCameraRetro, FaRegSmileBeam, FaPhotoVideo } from "react-icons/fa";
import { CiLink, CiGrid41, CiGrid2H, CiClock1, CiImageOn } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const formules = [
  {
    id: 1,
    title: "Formule 1",
    description: "Formule simple pour les évènements avec blablal",
    time: "5h",
    img_number: "500",
    icon: <FaCameraRetro size={40} className="mx-auto mb-4" />,
    // image: "/projects/Project - Mask Detection.png",
    // demoUrl:"#..."
  },
  {
    id: 2,
    title: "Formule 2",
    description: "Big data pipeline analyzing mobile network coverage in France using Hadoop, Kafka, Spark, and Opensearch. Includes visualization and processing of large-scale geospatial data from ANFR.",
    time: "5h",
    img_number: "500",
    icon: <FaPhotoVideo size={40} className="mx-auto mb-4" />,
    // image: "/projects/Project - French Mobile.png",
  },
  {
    id: 3,
    title: "Formule 3",
    description: "A computer vision system built with TensorFlow/Keras to detect and classify animal faces. Demonstrates convolutional neural networks applied to wildlife image recognition.",
    time: "5h",
    img_number: "500",
    icon: <FaRegSmileBeam size={40} className="mx-auto mb-4" />,
    // image: "/projects/Project - Animal face recognition.png",
  },
];


export const ServiceSection = () => {
  const gridClass = "grid grid-cols-1 md:grid-cols-3 gap-30";

  return <section id="services" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Nos {" "}
        <span className="text-primary">
           Formules
        </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        </p>


        <div className={gridClass}>
          {formules.map((formule) => (
            <div
              key={formule.id}
              className="bg-white text-black rounded-lg px-8 py-10 text-center shadow-md hover:scale-105 transition-transform duration-300 w-full md:w-80 gap-6"
            >
              {formule.icon}
              <h3 className="text-xl font-semibold mb-2">{formule.title}</h3>
              <p className="text-sm">{formule.description}</p>
              <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-3">
                <CiClock1 className="text-primary" size={20}/>
                <span>{formule.time}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-1">
                <CiImageOn className="text-primary" size={20}/>
                <span>{formule.img_number}photos</span>
              </div>
            </div>
          ))}

        </div>

    </div>
  </section>
}