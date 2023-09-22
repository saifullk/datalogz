// src/components/MockApi.tsx

import React, { useEffect, useState } from "react";

interface DogData {
  breed: string;
  image_url: string;
}



const MockApi: React.FC = () => {
  const [dogData, setDogData] = useState<DogData[]>([]);

  useEffect(() => {
    // Load the JSON file from the AWS S3 URL
    fetch("https://s3.amazonaws.com/khalid-datalogz/dog_data.json")
      .then((response) => response.json())
      .then((data: DogData[]) => {
        setDogData(data);
      })
      .catch((error) => {
        console.error("Error loading dog data:", error);
      });
  }, []);

  return (
    <div className="dog-grid">
      {dogData.map((dog, index) => (
        <div key={index} className="dog-card">
          <h3>{dog.breed}</h3>
          <img src={dog.image_url} alt={dog.breed} />
        </div>
      ))}
    </div>
  );
};

export default MockApi;