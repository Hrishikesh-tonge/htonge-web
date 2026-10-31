/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SawadNav } from './components/SawadNav';
import { SawadSidebar } from './components/SawadSidebar';
import { SawadHero } from './components/SawadHero';
import { SawadProjects } from './components/SawadProjects';
import { SawadExperience } from './components/SawadExperience';
import { SawadTools } from './components/SawadTools';
import { SawadCredentials } from './components/SawadCredentials';
import { SawadContact } from './components/SawadContact';
export default function App() {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0E1217] text-[#F0F4F8] selection:bg-[#F59E0B]/30 selection:text-white antialiased">
      {/* Floating Pill Navigation matching Sawad */}
      <SawadNav onPrintResume={handlePrintResume} />

      {/* Main 2-Column Framework Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
          {/* Left Sticky Profile Card */}
          <SawadSidebar onPrintResume={handlePrintResume} />

          {/* Right Main Scrollable Content */}
          <main className="flex-1 w-full space-y-16 sm:space-y-20 min-w-0">
            <SawadHero />
            <SawadProjects />
            <SawadExperience />
            <SawadTools />
            <SawadCredentials />
            <SawadContact />
          </main>
        </div>
      </div>
    </div>
  );
}
