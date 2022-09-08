import React from "react";
import ListingCard from "./ListingCard";
import listingData from "../data";

export default function ListingItemsSection() {
  const card = listingData.map((item) => {
    return (
      <ListingCard
        key={item.id}
        {...item}
        /*Option1: 
        image={item.image}
        title={item.title}
        rating={item.rating}
        location={item.location}
       */
      />
    );
  });
  return (
    <section className="listingItemsSection">
      <div className="listingItemsSectionDiv">{card}</div>
    </section>
  );
}
