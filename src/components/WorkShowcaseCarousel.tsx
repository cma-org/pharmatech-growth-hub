import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

// Import all showcase images
import meetingPresentation from "@/assets/work-showcase/meeting-presentation.jpg";
import professionalConversation from "@/assets/work-showcase/professional-conversation.jpg";
import teamCollaboration from "@/assets/work-showcase/team-collaboration.jpg";
import trainingSession from "@/assets/work-showcase/training-session.jpg";
import awardCeremony from "@/assets/work-showcase/award-ceremony.jpg";
import successfulTraining from "@/assets/work-showcase/successful-training.jpg";
import professionalMeeting from "@/assets/work-showcase/professional-meeting.jpg";
import largeGroupEvent from "@/assets/work-showcase/large-group-event.jpg";
import diverseTeam from "@/assets/work-showcase/diverse-team.jpg";
import strategicPlanning from "@/assets/work-showcase/strategic-planning.jpg";

const WorkShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcaseImages = [
    {
      src: meetingPresentation,
      alt: "Strategic meeting and presentation session with pharmaceutical professionals",
      title: "Strategic Consulting"
    },
    {
      src: professionalConversation,
      alt: "Professional consultation and networking",
      title: "Expert Consultation"
    },
    {
      src: teamCollaboration,
      alt: "Collaborative team work and registration process",
      title: "Team Collaboration"
    },
    {
      src: trainingSession,
      alt: "Interactive training session with engaged participants",
      title: "Interactive Training"
    },
    {
      src: awardCeremony,
      alt: "Recognition and award ceremony for excellence",
      title: "Recognition Events"
    },
    {
      src: successfulTraining,
      alt: "Successful training completion with satisfied participants",
      title: "Training Success"
    },
    {
      src: professionalMeeting,
      alt: "Professional meeting with industry experts",
      title: "Expert Meetings"
    },
    {
      src: largeGroupEvent,
      alt: "Large scale pharmaceutical industry event",
      title: "Industry Events"
    },
    {
      src: diverseTeam,
      alt: "Diverse team of pharmaceutical professionals",
      title: "Global Teams"
    },
    {
      src: strategicPlanning,
      alt: "Strategic planning and action priority discussions",
      title: "Strategic Planning"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === showcaseImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [showcaseImages.length]);

  // Get visible images (current + next 2 for desktop view)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % showcaseImages.length;
      visible.push(showcaseImages[index]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Delivering Excellence Across the Globe
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto animate-fade-in">
            From strategic consulting to hands-on training, witness our impact in transforming 
            pharmaceutical operations worldwide through collaboration, innovation, and expertise.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile View - Single Image */}
          <div className="block md:hidden">
            <Card className="relative overflow-hidden shadow-card border border-card-border/20 bg-card/5 backdrop-blur-sm">
              <div className="aspect-[16/10] relative">
                <img
                  src={showcaseImages[currentIndex].src}
                  alt={showcaseImages[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {showcaseImages[currentIndex].title}
                  </h3>
                </div>
              </div>
            </Card>
          </div>

          {/* Desktop View - Three Images */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
              <Card 
                key={`${currentIndex}-${index}`} 
                className={`relative overflow-hidden shadow-card border border-card-border/20 bg-card/5 backdrop-blur-sm transition-all duration-700 ${
                  index === 0 ? 'transform scale-105 ring-2 ring-accent/50' : 'transform scale-95 opacity-80'
                }`}
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseCarousel;