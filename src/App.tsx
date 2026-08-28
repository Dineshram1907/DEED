import React, { useState } from 'react';

// DEED application entry pointgit status
import type { Project } from './types';

// Layout & Common Components
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// 11 Core Page Sections
import { Hero } from './components/sections/Hero';
import { CapabilityStrip } from './components/sections/CapabilityStrip';
import { About } from './components/sections/About';
import { SelectedWork } from './components/sections/SelectedWork';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { WhyDeed } from './components/sections/WhyDeed';
import { OwnProductSection } from './components/sections/OwnProduct';
import { Capabilities } from './components/sections/Capabilities';
import { CTA } from './components/sections/CTA';

// Interactive Modals
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { ProjectInquiryModal } from './components/modals/ProjectInquiryModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="custom-cursor-active min-h-screen bg-[#FAF9F6] text-[#121212] flex flex-col font-sans selection:bg-[#FA3800] selection:text-white">
      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* 01 — NAVIGATION */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Main Studio Narrative */}
      <main className="flex-grow">
        {/* FRAME 01 — HERO (DEED / WE DESIGN AND BUILD what comes next.) */}
        <Hero onOpenInquiry={() => setInquiryOpen(true)} />

        {/* FRAME 02 — WHAT WE DO (Design, Development, Digital Products) */}
        <CapabilityStrip />
        <Services />

        {/* FRAME 03 — SELECTED CLIENT WORK (Virundhaalaya & Nexovate) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* FRAME 04 — OWN PRODUCT (A PRODUCT BY DEED — Identity) */}
        <OwnProductSection onOpenInquiry={() => setInquiryOpen(true)} />

        {/* FRAME 05 — PROCESS & STUDIO PHILOSOPHY */}
        <Process />
        <About onOpenInquiry={() => setInquiryOpen(true)} />
        <WhyDeed />
        <Capabilities />

        {/* FRAME 06 — START A PROJECT CTA */}
        <CTA onOpenInquiry={() => setInquiryOpen(true)} />
      </main>

      {/* 11 — FOOTER */}
      <Footer onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => {
          setSelectedProject(null);
          setInquiryOpen(true);
        }}
      />

      {/* Project Inquiry Form Modal */}
      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
};

export default App;
