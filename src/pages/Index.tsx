import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeachersSection from '@/components/TeachersSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import ConcertsSection from '@/components/ConcertsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch(activeSection) {
      case 'teachers': return <TeachersSection />;
      case 'about': return <AboutSection />;
      case 'schedule': return <ScheduleSection />;
      case 'concerts': return <ConcertsSection setActiveSection={setActiveSection} />;
      case 'contacts': return <ContactsSection />;
      default: return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-open-sans">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-16">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default Index;