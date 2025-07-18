import KalypsoSection from '@/components/KalypsoSection'

export default function Investment() {
  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-[#0d4e93] to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-400 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">We help firms thrive in the new era</h2>
          <p className="text-2xl text-white/80 font-medium">Our vision is to give every student a tutor that cares, by making it easier for you to care.</p>
        </div>

        {/* Key Problem Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl">
            <div className="text-6xl font-black text-red-600 mb-4">25%</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Student Churn Rate</div>
            <div className="text-gray-600">Industry average - firms can't see it coming</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl">
            <div className="text-6xl font-black text-orange-600 mb-4">5%</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Learning Visibility</div>
            <div className="text-gray-600">Of student study time actually observed</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl">
            <div className="text-6xl font-black text-red-600 mb-4">$1M+</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Revenue at Risk</div>
            <div className="text-gray-600">Per business due to blind operations</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl mb-16 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-6">
            <h3 className="text-3xl font-bold text-white text-center">Why Tutoring Businesses Fail</h3>
          </div>
          
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Chegg Example */}
              <div className="text-center">
                <img 
                  src="/Chegg.png" 
                  alt="Chegg Logo" 
                  className="w-40 h-40 mx-auto mb-6"
                />
                <h4 className="text-2xl font-bold text-red-600">-99% stock value since ChatGPT</h4>
              </div>

              {/* Right: The Question */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Will you survive ChatGPT?</h4>
                
                <div className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <div className="text-lg font-bold text-red-800 mb-1">No Real-Time Data</div>
                    <div className="text-red-700">Students quit before you know they're struggling</div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <div className="text-lg font-bold text-orange-800 mb-1">Can't Predict Churn</div>
                    <div className="text-orange-700">Missing the warning signs that matter</div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <div className="text-lg font-bold text-red-800 mb-1">Lost Revenue</div>
                    <div className="text-red-700">AI competitors see everything you miss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kalypso Solution */}
        <div className="max-w-6xl mx-auto text-center mt-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 mb-8">
            <h3 className="text-5xl lg:text-7xl font-black text-[#083462] mb-8 transform hover:scale-105 transition-all duration-500">
              Kalypso helps you <span className="text-[#083462] animate-glow-pulse inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">see everything</span>
            </h3>
            
            {/* Kalypso Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <img
                    src="/kalypsoeating.gif"
                    alt="Kalypso AI assistant"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#083462] text-white px-6 py-3 rounded-full shadow-lg">
                  <p className="font-semibold text-base">Your AI companion</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
              Your out-of-this-world friend is an AI companion that's vertically integrated across every level of your business.
            </p>
          </div>
          
          <div className="mt-12 animate-fade-in-up">
            <KalypsoSection />
          </div>
        </div>
      </div>
    </section>
  )
} 