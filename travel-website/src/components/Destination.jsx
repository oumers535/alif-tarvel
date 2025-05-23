import React from 'react'
import { destinations } from '../data/data';
import DestinationCard from './DestinationCard';

const Destination = () => {
 return (
          <section id="destinations" className="max-w-7xl mx-auto px-6 py-20">
            <h2 data-aos='zoom-in' className="text-4xl font-extrabold text-center mb-12">Popular Destinations</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.title} destination={destination} />
              ))}
            </div>
          </section>
        );
      }

export default Destination