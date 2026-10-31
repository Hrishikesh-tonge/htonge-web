/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HrishikeshNav } from './components/HrishikeshNav';
import { HrishikeshSidebar } from './components/HrishikeshSidebar';
import { HrishikeshHero } from './components/HrishikeshHero';
import { HrishikeshProjects } from './components/HrishikeshProjects';
import { HrishikeshExperience } from './components/HrishikeshExperience';
import { HrishikeshTools } from './components/HrishikeshTools';
import { HrishikeshCredentials } from './components/HrishikeshCredentials';
import { HrishikeshContact } from './components/HrishikeshContact';

export default function App() {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0E1217] text-[#F0F4F8] selection:bg-[#F59E0B]/30 selection:text-white antialiased">
      {/* Floating Pill Navigation */}
      <HrishikeshNav onPrintResume={handlePrintResume} />

      {/* Main 2-Column Framework Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
          {/* Left Sticky Profile Card */}
          <HrishikeshSidebar onPrintResume={handlePrintResume} />

          {/* Right Main Scrollable Content */}
          <main className="flex-1 w-full space-y-16 sm:space-y-20 min-w-0">
            <HrishikeshHero />
            <HrishikeshProjects />
            <HrishikeshExperience />
            <HrishikeshTools />
            <HrishikeshCredentials />
            <HrishikeshContact />
          </main>
        </div>
      </div>
    </div>
  );
}
