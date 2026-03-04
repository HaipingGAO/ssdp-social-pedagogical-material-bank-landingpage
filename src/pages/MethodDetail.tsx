import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Library, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { METHODS, DetailedActivity } from '../data';
import { ImageCarousel } from '../components/ImageCarousel';

const CARD_COLORS = [
  'bg-white',
  'bg-blue-50/50',
  'bg-emerald-50/50',
  'bg-amber-50/50',
  'bg-purple-50/50'
];

const ActivityCard = ({ activity, index }: { activity: DetailedActivity, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const bgColor = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <div className={`${bgColor} rounded-[2rem] p-8 shadow-sm ring-1 ring-slate-200 transition-colors`}>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{activity.name}</h3>
      <p className="text-slate-600 text-lg mb-6 leading-relaxed">
        <strong className="text-slate-900">Summary:</strong> {activity.summary}
      </p>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors bg-white px-5 py-2.5 rounded-full ring-1 ring-slate-200 shadow-sm"
      >
        Planning the activity
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div className="mb-8">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Supply List</h4>
              {activity.supplyList && activity.supplyList.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  {activity.supplyList.map((item, i) => (
                    <li key={i} className="pl-2">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">To be updated.</p>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Steps</h4>
              {activity.steps && activity.steps.length > 0 ? (
                <ol className="list-decimal list-inside space-y-3 text-slate-600">
                  {activity.steps.map((step, i) => (
                    <li key={i} className="pl-2 leading-relaxed">{step}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-slate-500">To be updated.</p>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Open-Ended Questions</h4>
              {activity.openEndedQuestions && activity.openEndedQuestions.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  {activity.openEndedQuestions.map((q, i) => (
                    <li key={i} className="pl-2">{q}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">To be updated.</p>
              )}
            </div>

            <div className="bg-white/60 rounded-xl p-6 ring-1 ring-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Practical Tips</h4>
              {activity.practicalTips && activity.practicalTips.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  {activity.practicalTips.map((tip, i) => (
                    <li key={i} className="pl-2">{tip}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">To be updated.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MethodDetail() {
  const { id } = useParams();
  const method = METHODS.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!method) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Method not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Resource Bank
          </Link>
          <div className="flex items-center gap-2 text-slate-400">
            <Library className="h-5 w-5" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {method.categories.map((cat, idx) => (
              <span key={idx} className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm font-bold uppercase tracking-wide text-blue-700">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {method.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {method.subtitle}
          </p>
        </div>

        {/* Hero Image Carousel */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
          <ImageCarousel 
            images={method.imageUrls} 
            alt={method.title} 
            className="w-full aspect-[21/9]" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Key Concepts & Takeaways */}
          <div className="md:col-span-1 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Key Concepts</h2>
              <div className="space-y-6">
                {method.keyConcepts.map((concept, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{concept.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{concept.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Practical Takeaways</h2>
              <div className="space-y-6">
                {method.practicalTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-2xl p-5 ring-1 ring-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      {takeaway.name}
                    </h3>
                    <p className="text-blue-800/80 text-sm leading-relaxed">{takeaway.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Activity Guide */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Activity Guide</h2>
              
              <div className="space-y-6">
                {method.detailedActivities.map((activity, idx) => (
                  <ActivityCard key={idx} activity={activity} index={idx} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
