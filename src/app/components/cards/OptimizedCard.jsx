import React from 'react';

const OptimizedCard = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 transition-all duration-300 hover:scale-105">
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default OptimizedCard;
