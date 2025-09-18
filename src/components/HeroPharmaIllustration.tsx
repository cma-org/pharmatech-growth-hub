import { 
  Beaker, 
  Microscope, 
  FlaskConical,
  TestTube,
  Atom,
  Shield,
  Award,
  Users,
  BarChart3,
  FileCheck
} from "lucide-react";

const HeroPharmaIllustration = () => {
  return (
    <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 bg-accent rounded-full"></div>
      </div>

      {/* Floating pharmaceutical elements */}
      
      {/* Main microscope - center piece */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
          <Microscope className="h-12 w-12 text-primary mx-auto mb-2" />
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">GxP</div>
            <div className="text-sm text-muted-foreground">Excellence</div>
          </div>
        </div>
      </div>

      {/* Test tube - top left */}
      <div className="absolute top-16 left-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <TestTube className="h-8 w-8 text-accent mx-auto mb-1" />
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">Quality</div>
            <div className="text-xs text-muted-foreground">Control</div>
          </div>
        </div>
      </div>

      {/* Beaker - top right */}
      <div className="absolute top-20 right-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Beaker className="h-8 w-8 text-primary mx-auto mb-1" />
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">10K+</div>
            <div className="text-xs text-muted-foreground">Trained</div>
          </div>
        </div>
      </div>

      {/* Flask - bottom left */}
      <div className="absolute bottom-20 left-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <FlaskConical className="h-8 w-8 text-accent mx-auto mb-1" />
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">GMP</div>
            <div className="text-xs text-muted-foreground">Compliant</div>
          </div>
        </div>
      </div>

      {/* Molecule structure - middle left */}
      <div className="absolute top-32 left-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Atom className="h-6 w-6 text-primary mx-auto mb-1" />
          <div className="text-center">
            <div className="text-xs font-semibold text-foreground">API</div>
          </div>
        </div>
      </div>

      {/* Shield - top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Shield className="h-6 w-6 text-accent mx-auto mb-1" />
          <div className="text-center">
            <div className="text-xs font-semibold text-foreground">FDA</div>
          </div>
        </div>
      </div>

      {/* Award - bottom right */}
      <div className="absolute bottom-16 right-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Award className="h-8 w-8 text-primary mx-auto mb-1" />
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">75+</div>
            <div className="text-xs text-muted-foreground">Years Exp</div>
          </div>
        </div>
      </div>

      {/* Users - middle right */}
      <div className="absolute top-40 right-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Users className="h-6 w-6 text-accent mx-auto mb-1" />
          <div className="text-center">
            <div className="text-xs font-semibold text-foreground">Team</div>
          </div>
        </div>
      </div>

      {/* Chart - bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <BarChart3 className="h-6 w-6 text-primary mx-auto mb-1" />
          <div className="text-center">
            <div className="text-xs font-semibold text-foreground">Analytics</div>
          </div>
        </div>
      </div>

      {/* File Check - middle bottom */}
      <div className="absolute bottom-32 left-1/3 animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <FileCheck className="h-6 w-6 text-accent mx-auto mb-1" />
          <div className="text-center">
            <div className="text-xs font-semibold text-foreground">Audit</div>
          </div>
        </div>
      </div>

      {/* Connecting lines/dots */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
        
        {/* Connecting lines */}
        <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary/20" strokeDasharray="5,5"/>
        <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent/20" strokeDasharray="5,5"/>
        <line x1="20%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary/20" strokeDasharray="5,5"/>
        <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent/20" strokeDasharray="5,5"/>
      </svg>
    </div>
  );
};

export default HeroPharmaIllustration;