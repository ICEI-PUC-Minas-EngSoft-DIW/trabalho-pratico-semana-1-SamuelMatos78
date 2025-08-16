import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (index: number) => {
    const speed = (index + 1) * 0.5;
    const x = (mousePosition.x - 0.5) * speed * 20;
    const y = (mousePosition.y - 0.5) * speed * 20;
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen font-inter overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating background elements */}
        <div 
          className="floating-element top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-circle animate-float"
          style={getParallaxStyle(0)}
        ></div>
        <div 
          className="floating-element top-40 right-32 w-24 h-24 bg-purple-400 rounded-full blur-circle animate-float"
          style={{
            ...getParallaxStyle(1),
            animationDelay: "2s"
          }}
        ></div>
        <div 
          className="floating-element bottom-32 left-40 w-20 h-20 bg-cyan-400 rounded-full blur-circle animate-float"
          style={{
            ...getParallaxStyle(2),
            animationDelay: "4s"
          }}
        ></div>
        <div 
          className="floating-element bottom-20 right-20 w-28 h-28 bg-indigo-400 rounded-full blur-circle animate-float"
          style={{
            ...getParallaxStyle(3),
            animationDelay: "1s"
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main greeting */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-slide-up">
                <span className="block gradient-text font-black" data-testid="text-hello">Hello</span>
                <span 
                  className="block text-navy-900 font-light animate-slide-up" 
                  style={{ animationDelay: "0.3s" }}
                  data-testid="text-world"
                >
                  World
                </span>
              </h1>
            </div>

            {/* Separator line */}
            <div 
              className="flex items-center justify-center animate-fade-in" 
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="w-3 h-3 mx-4 rounded-full bg-blue-400"></div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>

            {/* Subtitle */}
            <div 
              className="animate-slide-up" 
              style={{ animationDelay: "0.9s" }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-600">
                I'm <span className="gradient-text font-semibold" data-testid="text-samuel">Samuel</span>
              </p>
            </div>

            {/* Additional elements for visual richness */}
            <div 
              className="mt-16 animate-fade-in" 
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex justify-center space-x-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <div 
                  className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" 
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" 
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Status indicator */}
      <div 
        className="fixed bottom-8 right-8 animate-fade-in" 
        style={{ animationDelay: "1.5s" }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
