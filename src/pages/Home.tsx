import React, { useState, useEffect } from 'react';
import { Plus, X, Check, Library, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { METHODS, CATEGORIES, Category, Method } from '../data';
import { ImageCarousel } from '../components/ImageCarousel';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedMethod) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMethod]);

  const filteredMethods = METHODS.filter((method) => {
    const matchesCategory = activeCategory === 'All' || method.categories.includes(activeCategory);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      method.title.toLowerCase().includes(searchLower) || 
      method.description.toLowerCase().includes(searchLower) ||
      method.keywords.some(k => k.toLowerCase().includes(searchLower));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-slate-100 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-32">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-0 h-[1000px] w-[1000px] -translate-x-1/2 translate-y-1/4 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-50/80 blur-3xl" />
          <svg className="absolute left-1/4 top-1/4 h-64 w-64 text-blue-200/40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.5,-2.4C98.2,13.3,93.6,29.4,84.1,42.5C74.6,55.6,60.2,65.7,44.8,72.4C29.4,79.1,13,82.4,-2.8,86.5C-18.6,90.6,-33.8,95.5,-47.5,90.1C-61.2,84.7,-73.4,69,-81.8,51.8C-90.2,34.6,-94.8,15.9,-93.2,-2.1C-91.6,-20.1,-83.8,-37.4,-72.4,-51.1C-61,-64.8,-46,-74.9,-31.1,-81.1C-16.2,-87.3,-1.4,-89.6,12.7,-88.4C26.8,-87.2,40.9,-82.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
            <Library className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Social Pedagogical Resource Bank
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A curated archive of practical methods and knowledge for ECEC, youth work, and group counseling practices.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="relative flex items-center w-full h-14 rounded-full bg-white shadow-sm ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-md transition-all overflow-hidden">
            <div className="grid place-items-center h-full w-14 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              className="peer h-full w-full outline-none text-base text-slate-700 pr-6 bg-transparent placeholder:text-slate-400"
              type="text"
              placeholder="Search a method..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="mr-2 text-sm font-medium text-slate-500">Filter by keywords:</span>
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-200'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
                }`}
              >
                {isActive && <Check className="h-4 w-4" />}
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMethods.map((method) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={method.id}
              >
                <div
                  onClick={() => setSelectedMethod(method)}
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/10 ring-1 ring-slate-900/5"
                >
                  {/* Card Image Carousel */}
                  <ImageCarousel 
                    images={method.imageUrls} 
                    alt={method.title} 
                    className="mb-5 aspect-[4/3] rounded-2xl" 
                  />

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col px-1 pb-1">
                    <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {method.title}
                    </h3>
                    <p className="mb-6 text-sm text-slate-500 line-clamp-2">
                      {method.subtitle}
                    </p>
                    
                    {/* Bottom Action Area */}
                    <div className="mt-auto flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {method.keywords.slice(0, 4).map((keyword, idx) => (
                          <span key={idx} className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                        <Plus className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredMethods.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No methods found matching your search or filter.
          </div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMethod && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMethod(null)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex flex-col h-full overflow-hidden md:flex-row">
                  {/* Left: Image & Characteristics */}
                  <div className="md:w-[45%] bg-white p-6 md:p-8 flex flex-col overflow-y-auto border-r border-slate-100">
                    <div className="w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/5 mb-6">
                      <ImageCarousel 
                        images={selectedMethod.imageUrls} 
                        alt={selectedMethod.title} 
                        className="w-full aspect-[4/3]" 
                      />
                    </div>
                    
                    <div className="space-y-3 px-2">
                      <h3 className="font-bold text-slate-900 mb-2">Key Concepts</h3>
                      {selectedMethod.keyConcepts.map((char, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                          <span className="text-slate-400 mt-0.5">+</span>
                          <span>{char.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Scrollable Content */}
                  <div className="flex flex-col md:w-[55%] overflow-y-auto bg-white">
                    <div className="p-6 md:p-10 lg:p-12">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {selectedMethod.categories.map((cat, idx) => (
                          <span key={idx} className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                            {cat}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                        {selectedMethod.title}
                      </h2>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedMethod.keywords.map((keyword, idx) => (
                          <span key={idx} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      
                      <div className="prose prose-slate prose-sm sm:prose-base max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-8">
                          {selectedMethod.description}
                        </p>
                        
                        {selectedMethod.detailedActivities && selectedMethod.detailedActivities.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Common Activities</h3>
                            <div className="space-y-4">
                              {selectedMethod.detailedActivities.map((activity, idx) => (
                                <div key={idx} className="text-slate-700 text-sm">
                                  <span className="font-semibold text-slate-900">{activity.name}</span>
                                  <span className="mx-1">—</span>
                                  <span>{activity.summary}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Area */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <Link
                          to={`/method/${selectedMethod.id}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                        >
                          View details of the method
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
