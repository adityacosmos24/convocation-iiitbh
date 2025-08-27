import { MapPin, Calendar, Mic, Users } from 'lucide-react';

const About = () => {
  // Data for the information items. This makes it easy to manage and update.
  const eventDetails = [
    {
      icon: <MapPin className="h-8 w-8 text-pink-500" />,
      title: "Location",
      details: "Auditorium, IIT Patna",
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Date & Time",
      details: (
        <>
          25ᵗʰ Aug, 2025, Rehearsal, <br /> 04:00 PM <br />
          26ᵗʰ Aug, 2025, Convocation, <br /> 09:00 AM
        </>
      ),
    },
    {
      icon: <Mic className="h-8 w-8 text-pink-500" />,
      title: "Edition",
      details: "12ᵗʰ",
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "Graduated",
      details: "1325",
    },
  ];

  return (
    // The white card that holds the content. The positioning is now handled by the parent App component.
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-5xl w-full mx-auto">
      {/* Grid layout for the information items. It's responsive. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {eventDetails.map((item, index) => (
          // Each individual info item
          <div key={index} className="flex items-start space-x-4">
            {/* Icon container */}
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            {/* Text content container */}
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.title}</p>
              <p className="mt-1 text-gray-600">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App component to create the overlapping layout
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="relative">
        {/* 1. Background Section (Video/Image) */}
        {/* This div acts as the video player area. I'm using a placeholder image with a dark overlay to match the style. */}
        <div 
          className="h-[70vh] bg-cover bg-center relative" 
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/2d3748/a0aec0?text=Event+Venue')" }}
        >
          {/* Dark overlay for better text contrast and mood */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* You could place video controls or other elements here, absolutely centered */}
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Example of play/pause buttons like in the screenshot */}
             <div className="flex space-x-4">
                <button className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white border-2 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                </button>
                <button className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white border-2 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 12-8-5v10l8-5z"></path><path d="m20 12-8-5v10l8-5z"></path></svg>
                </button>
             </div>
          </div>
        </div>

        {/* 2. Overlapping Card Section */}
        {/* This container pulls the About component up to overlap the background section. */}
        <div className="relative px-4 sm:px-6 lg:px-8 -mt-24">
          <About />
        </div>
      </main>
    </div>
  );
}
