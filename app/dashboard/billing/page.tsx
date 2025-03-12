"use client";
import React from "react";

function Billing() {
  // Function to handle sharing
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this amazing site!",
          text: "I'm using this fantastic site for free! Check it out here:",
          url: "https://kirat-gpt-ai.vercel.app/",
        });
        console.log("Thanks for sharing!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on your browser. Please copy and share the link manually!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient">
      <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">Billing</h1>
        <p className="text-xl text-gray-600">
          Current Plan:
          <span className="text-green-500 font-bold text-3xl ml-2">
            ₹0
          </span>
        </p>
        <p className="text-gray-500 mt-2 mb-6 animate-bounce">
          You’re enjoying this site completely free. Thank you for being part of our community!
        </p>
        <button
          onClick={handleShare}
          className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 hover:shadow-xl transform transition-all duration-500 animate-pulse"
        >
          Share with Friends
        </button>
      </div>
    </div>
  );
}

export default Billing;
