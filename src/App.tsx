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
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F0F4F8] selection:bg-[#F59E0B]/30 selection:text-white antialiased relative overflow-x-hidden">
      {/* Atmospheric Ambient Lighting Gradients */}
      <div 
        aria-hidden="true" 
        className="fixed top-[-100px] left-[10%] w-[650px] h-[550px] bg-gradient-to-br from-[#F59E0B]/12 via-[#E25A1C]/5 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed top-[40%] right-[-100px] w-[550px] h-[650px] bg-gradient-to-bl from-[#38BDF8]/10 via-[#0284C7]/4 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-0 left-[20%] w-[500px] h-[400px] bg-gradient-to-tr from-[#10B981]/6 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      {/* Micro Tech-Dot Matrix with radial fade mask */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-tech-dots pointer-events-none -z-10 opacity-60" 
      />

      {/* Floating Pill Navigation */}
      <HrishikeshNav />

      {/* Main 2-Column Framework Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
          {/* Left Sticky Profile Card */}
          <HrishikeshSidebar />

          {/* Right Main Scrollable Content */}
          <main className="flex-1 w-full space-y-16 sm:space-y-24 min-w-0">
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
