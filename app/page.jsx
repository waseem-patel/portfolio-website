'use client';

import { useState } from 'react';
import { 
  Building2, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  ChevronDown,
  Monitor,
  BarChart3,
  Layers,
  Network
} from 'lucide-react';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState('ideahub');
  const [expandedRole, setExpandedRole] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('waseem.patel@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const experienceList = [
    {
      id: 'signaux',
      company: 'SIGNAUX',
      role: 'Huawei IdeaHub Consultant',
      period: 'Oct 2025 – Present',
      location: 'Dubai, United Arab Emirates',
      current: true,
      summary: 'Directing pre-sales technical architecture, partner enablement, and hands-on workshops for Huawei IdeaHub smart collaboration ecosystems across commercial and enterprise clients.',
      details: [
        'Conducting tailored training sessions for distribution channels, system integrators, and enterprise end-users.',
        'Architecting tailored interactive smart office collaboration solutions for executive boardrooms and modern hybrid work environments.',
        'Providing end-to-end guidance from initial pre-sales scoping to post-implementation adoption.'
      ]
    },
    {
      id: 'eros',
      company: 'Eros Group',
      role: 'HUAWEI IdeaHub Partner Development & Sales Consultancy',
      period: 'Oct 2023 – Sep 2025 (2 yrs)',
      location: 'Dubai, United Arab Emirates',
      summary: 'Orchestrated regional channel partnership expansion, driving reseller engagement, product demonstrations, and double-digit business growth across the UAE.',
      details: [
        'Built and managed strategic commercial relationships with leading distributors and value-added resellers.',
        'Spearheaded nationwide UAE roadshows and executive demo days to demonstrate smart office collaboration.',
        'Recognized with the prestigious Huawei eKit Best Pre-sales Manager of 2024 (UAE) award for exceptional partner engagement and commercial success.'
      ]
    },
    {
      id: 'huawei-cbg',
      company: 'Huawei Consumer Business Group',
      role: 'Consumer Business Group - B2B Manager',
      period: 'Feb 2023 – Oct 2023 (9 mos)',
      location: 'Dubai, UAE',
      summary: 'Formulated commercial B2B growth strategies and cross-functional initiatives to scale enterprise collaboration opportunities.',
      details: [
        'Expanded commercial footprint by introducing tailored collaboration packages to enterprise clients.',
        'Aligned retail and enterprise business units to unlock strategic corporate procurement accounts.'
      ]
    },
    {
      id: 'hp',
      company: 'HP',
      role: 'Enterprise Business Development Specialist',
      period: 'May 2018 – Jan 2023 (4 yrs 9 mos)',
      location: 'United Arab Emirates',
      summary: 'Led enterprise account planning, managed print services (MPS), and IT supplies optimization across Education, Healthcare, FMCG, and Government sectors.',
      details: [
        'Engaged senior executives and C-level decision-makers to audit print fleets, shrink operating expenditures, and modernize infrastructure.',
        'Consistently met and exceeded multi-million dollar annual quotas across strategic UAE enterprise accounts.',
        'Coordinated multi-business unit opportunities across direct customer relationships and tier-1 partner supply chains.'
      ]
    },
    {
      id: 'qi',
      company: 'Qi Group',
      role: 'Partner Business Development',
      period: 'Aug 2016 – Apr 2018 (1 yr 9 mos)',
      location: 'United Arab Emirates',
      summary: 'Developed executive engagement frameworks, joint value propositions, and strategic alliance go-to-market roadmaps.',
      details: [
        'Established formal partner performance reviews and revenue-sharing governance.',
        'Negotiated high-value national alliance agreements in highly competitive technology distribution environments.'
      ]
    },
    {
      id: 'oracle',
      company: 'Oracle',
      role: 'Business Development Consultant',
      period: 'May 2015 – Aug 2016 (1 yr 4 mos)',
      location: 'Dubai, UAE',
      summary: 'Advised enterprise clients across East & West Africa on modernizing IT systems to Oracle Cloud Application solutions.',
      details: [
        'Generated verified sales pipeline through customer requirements discovery, cloud ROI modeling, and solution mapping.',
        'Earned The Best BRC Award (Q2 FY16) within the Oracle Applications BDG team for highest quarterly opportunity creation.'
      ]
    },
    {
      id: 'redington',
      company: 'Redington Gulf',
      role: 'Asst. Product Manager & Senior SAP Functional Consultant',
      period: 'Dec 2008 – Apr 2014 (5 yrs 5 mos)',
      location: 'Dubai, UAE',
      summary: 'Managed Norton Symantec lifestyle distribution and directed large-scale SAP SD/MM/LE enterprise implementations across 18 MENA entities.',
      details: [
        'Asst. Product Manager (2012–2014): Full P&L management, pricing models, retail channel promotions, and vendor alignment.',
        'Senior SAP Consultant (2008–2012): Led business blueprint design, GAP analysis, custom functional specs with ABAP developers, and LSMW cutover across 18 regional operating subsidiaries.'
      ]
    },
    {
      id: 'intercare',
      company: 'Intercare Limited & Early Career',
      role: 'Systems Analyst & ERP Specialist',
      period: '2000 – 2008',
      location: 'UAE & India',
      summary: 'Built the foundational technical mastery spanning ERP solutions (ORION, 3i-Infotech), Oracle Forms & Reports, and PowerBuilder SDLC.',
      details: [
        'Supported enterprise database operations, automated reporting, and branch connectivity across UAE and Egypt.',
        'Delivered complete SDLC implementations for major industrial clients including Alkem Laboratories.'
      ]
    }
  ];

  const featuredWork = [
    {
      title: 'Huawei IdeaHub Ecosystem & Smart Collaboration Deployments',
      organization: 'Eros Group & SIGNAUX',
      scope: 'United Arab Emirates',
      impact: 'Huawei eKit Best Pre-sales Manager of 2024',
      description: 'Championed the market rollout of Huawei IdeaHub smart board displays across Dubai, spearheading live client demonstrations, partner certification academies, and enterprise boardroom transformations for education, government, and corporate clients.',
      tags: ['Huawei IdeaHub', 'Smart Office', 'Pre-Sales Architecture', 'Partner Workshops']
    },
    {
      title: 'Enterprise Print Infrastructure & Fleet Modernization',
      organization: 'HP',
      scope: 'UAE Large Enterprise & Public Sector',
      impact: 'Multi-Year Strategic Enterprise Agreements',
      description: 'Consulted C-level leadership in Healthcare, Education, and FMCG sectors on auditing and restructuring print fleet operational expenditures, delivering customized managed print services (MPS) that reduced total cost of ownership.',
      tags: ['Enterprise Account Planning', 'Cost Optimization', 'Managed Print Services', 'C-Level Selling']
    },
    {
      title: 'Cross-Border Cloud Migration Advisory',
      organization: 'Oracle',
      scope: 'East & West Africa Region',
      impact: 'Best BRC Award (Q2 FY16)',
      description: 'Advised African enterprise leaders on migrating legacy on-premise application workloads into scalable Oracle Cloud solutions, generating qualified pipeline and driving measurable cloud adoption velocity.',
      tags: ['Oracle Cloud', 'Enterprise Solution Architecture', 'Pipeline Velocity', 'MEDDIC']
    },
    {
      title: '18-Entity SAP ERP & Workflow Rollout',
      organization: 'Redington Gulf',
      scope: 'Middle East & North Africa (MENA)',
      impact: '18 Regional Operating Entities Live',
      description: 'Orchestrated the core business blueprinting, requirement mapping, and legacy cutover into SAP SD/MM/LE and Documentum xCP workflows across 18 commercial business units in the MENA region.',
      tags: ['SAP SD/MM/LE', 'Documentum xCP', 'Business Blueprinting', 'Regional Rollouts']
    }
  ];

  const inquiryDrafts = {
    ideahub: {
      title: 'Huawei IdeaHub & Smart Office Inquiry',
      subject: 'Inquiry: Huawei IdeaHub Demonstration & Deployment Consultation',
      body: 'Hello Waseem,\n\nI would like to explore Huawei IdeaHub smart collaboration solutions for our executive meeting rooms. Please let me know your availability for a discovery discussion.\n\nBest regards,'
    },
    channels: {
      title: 'Channel & Distributor Alliances',
      subject: 'Inquiry: Strategic Channel Partnership & Distribution Advisory',
      body: 'Hello Waseem,\n\nWe are looking to develop and scale our technology reseller network and channel strategy in the UAE. We would appreciate your strategic consultancy.\n\nBest regards,'
    },
    enterprise: {
      title: 'Enterprise IT Sales & Solutions',
      subject: 'Inquiry: Enterprise IT Advisory & Commercial Engagement',
      body: 'Hello Waseem,\n\nWe have an upcoming enterprise initiative requiring strategic consultative selling and technology architecture expertise. Let us arrange a brief meeting.\n\nBest regards,'
    }
  };

  return (
    <div className="min-h-screen bg-ground text-ink selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ground/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg tracking-tight hover:text-accent transition-colors flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-accent/20 text-accent border border-accent/30 flex items-center justify-center text-xs font-bold font-mono">
              WP
            </span>
            <span>WASEEM PATEL</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted">
            <a href="#about" className="hover:text-ink transition-colors">About</a>
            <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
            <a href="#projects" className="hover:text-ink transition-colors">Featured Work</a>
            <a href="#skills" className="hover:text-ink transition-colors">Competencies</a>
            <a href="#credentials" className="hover:text-ink transition-colors">Credentials</a>
            <a href="#contact" className="text-accent hover:text-accent-hover font-semibold transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/waseempatel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/[0.05] text-ink-muted hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/waseem-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/[0.05] text-ink-muted hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Taste Skill "The Name as a Monument" */}
      <header id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-soft border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Dubai, United Arab Emirates · Enterprise Sales Leader
          </div>

          {/* Monumental Name Display */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] uppercase text-white mb-8">
            WASEEM<br />PATEL
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
            <div className="md:col-span-8">
              <p className="text-xl sm:text-2xl text-ink font-medium leading-snug">
                Certified Huawei IdeaHub Sales Consultant & Enterprise IT Specialist with 20+ years driving strategic partnerships, C-level sales growth, and smart office innovation.
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-accent hover:bg-accent-hover text-white font-semibold transition-all shadow-lg shadow-accent/20"
              >
                <Mail className="w-4 h-4" />
                Initiate Conversation
              </a>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/waseempatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-ink text-sm font-medium border border-white/[0.1] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/waseem-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-ink text-sm font-medium border border-white/[0.1] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Core Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/[0.08]">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">20+</div>
              <div className="text-xs sm:text-sm text-ink-muted mt-1 uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">18+</div>
              <div className="text-xs sm:text-sm text-ink-muted mt-1 uppercase tracking-wider font-medium">Regional Rollouts</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">2x</div>
              <div className="text-xs sm:text-sm text-ink-muted mt-1 uppercase tracking-wider font-medium">Excellence Awards</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">C-Level</div>
              <div className="text-xs sm:text-sm text-ink-muted mt-1 uppercase tracking-wider font-medium">Executive Engagement</div>
            </div>
          </div>

        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Me</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Executive Profile</h2>
              <div className="mt-6 p-4 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-2 font-semibold">Languages</div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-2.5 py-1 rounded bg-white/[0.05] text-ink font-medium">English</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.05] text-ink font-medium">Hindi</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.05] text-ink font-medium">Urdu</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6 text-lg text-ink-muted leading-relaxed">
              <p className="text-white font-medium text-xl leading-relaxed">
                With over two decades of experience spanning IT, Enterprise Sales, Business Development, and Account Management, I specialize in architecting and delivering mission-critical enterprise solutions.
              </p>
              <p>
                My methodology is rooted in disciplined sales frameworks—including <strong className="text-white">Sandler Sales Techniques, MEDDPICC, and MEDDIC</strong>—paired with quantitative business analytics using <strong className="text-white">Tableau and Power BI</strong>. This enables me to consistently uncover organizational pain points, align complex product capabilities with fiscal priorities, and close strategic multi-tier agreements.
              </p>
              <p>
                Having served in leadership and consulting capacities at <strong className="text-white">Huawei, HP, Oracle, and Redington</strong>, I work directly with C-level executives and senior managers across education, healthcare, FMCG, and public sectors in the UAE and wider MENA region.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 md:py-28 border-b border-white/[0.08] bg-ground-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Career Progression</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">Professional Experience</h2>
            </div>
            <p className="text-sm text-ink-muted max-w-md">
              A track record spanning international technology vendors, regional distribution giants, and systems consultancies.
            </p>
          </div>

          <div className="space-y-6">
            {experienceList.map((job) => (
              <div 
                key={job.id} 
                className="p-6 md:p-8 rounded-lg bg-ground-card/70 border border-white/[0.08] hover:border-white/[0.16] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-accent font-semibold text-base mt-1 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                      <span className="text-ink-muted font-normal">·</span>
                      <span className="text-ink-muted text-sm font-normal">{job.location}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-ink-muted bg-white/[0.05] px-3 py-1.5 rounded self-start">
                    {job.period}
                  </div>
                </div>

                <p className="text-ink-muted mt-4 text-base leading-relaxed">
                  {job.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {job.details.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects & High-Impact Work */}
      <section id="projects" className="py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Key Initiatives</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">Featured Work & Projects</h2>
            <p className="text-ink-muted text-base mt-2 max-w-xl">
              Major enterprise deployments, cross-border transformations, and partner enablement programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((project, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-lg bg-ground-card/50 border border-white/[0.08] hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-accent font-mono mb-3">
                    <span>{project.organization}</span>
                    <span>{project.scope}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.05] text-xs font-medium text-white mb-4">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span>{project.impact}</span>
                  </div>

                  <p className="text-ink-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-white/[0.05] text-xs font-medium text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies & Skills Section */}
      <section id="skills" className="py-20 md:py-28 border-b border-white/[0.08] bg-ground-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">Core Competencies & Frameworks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="p-6 rounded-lg bg-ground-card/60 border border-white/[0.08]">
              <div className="w-10 h-10 rounded bg-accent-soft text-accent flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Smart Office & Collaboration</h3>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>• Huawei IdeaHub Solutions</li>
                <li>• Interactive Flat Panel Displays</li>
                <li>• Hybrid Meeting Room Architecture</li>
                <li>• Proof of Concept & Live Demos</li>
                <li>• Enterprise Pre-Sales Scoping</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-lg bg-ground-card/60 border border-white/[0.08]">
              <div className="w-10 h-10 rounded bg-accent-soft text-accent flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Sales Frameworks & Analytics</h3>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>• MEDDPICC & MEDDIC Methodology</li>
                <li>• Sandler Sales Techniques</li>
                <li>• Question-Based Selling</li>
                <li>• Tableau Desktop Certified</li>
                <li>• Power BI & Pipeline Analytics</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-lg bg-ground-card/60 border border-white/[0.08]">
              <div className="w-10 h-10 rounded bg-accent-soft text-accent flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Enterprise Systems & Channels</h3>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>• SAP SD/MM/LE Implementations</li>
                <li>• Oracle Enterprise Solutions</li>
                <li>• Channel Ecosystem Development</li>
                <li>• Value-Added Reseller Programs</li>
                <li>• Regional MENA IT Distribution</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials, Awards & Education */}
      <section id="credentials" className="py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Recognitions</span>
                <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Honors & Awards</h2>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Huawei eKit Best Pre-sales Manager of 2024 (UAE)</span>
                  </div>
                  <p className="text-sm text-ink-muted mt-2">
                    Awarded for top pre-sales technical consultation, high-impact channel partner workshops, and commercial enablement across the United Arab Emirates.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                    <Award className="w-4 h-4" />
                    <span>The Best BRC Award - Q2 FY16</span>
                  </div>
                  <p className="text-sm text-ink-muted mt-2">
                    Awarded by the Oracle Applications BDG team for outstanding opportunity creation and pipeline performance.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-bold text-white mb-3">Professional Certifications</h3>
                <ul className="space-y-2 text-sm text-ink-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Tableau Desktop Certified Professional Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>HCSA - Field IdeaHub (Distribution)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Question Based Selling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Empathy for Sales Professionals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Academic & Training</span>
                <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Education & Methodologies</h2>
              </div>

              <div className="p-6 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Bachelor of Science (B.Sc.)</h3>
                    <div className="text-sm text-accent font-medium">Statistics, Mathematics & Computer Science</div>
                    <div className="text-xs text-ink-muted mt-0.5">Christ College - Bangalore (1995 – 1998)</div>
                  </div>
                </div>
                <p className="text-sm text-ink-muted mt-4 leading-relaxed">
                  Rigorous analytical and computational grounding powering data analytics, ERP systems, and structured sales pipeline evaluation.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-bold text-white mb-3">Executive Sales Programs</h3>
                <div className="space-y-2 text-sm text-ink-muted">
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-white font-medium">MEDDIC Sales Methodology</div>
                    <div className="text-xs text-ink-muted">2022 · Advanced qualification for enterprise deal velocity</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-white font-medium">Sandler Training: Advanced Prospecting & Foundation</div>
                    <div className="text-xs text-ink-muted">2015 – 2016 · High-level sales qualification & operations</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-white font-medium">John Costigan - Sales & Leadership Development</div>
                    <div className="text-xs text-ink-muted">2015 · New Velocity (Onsite, Dublin, Ireland)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Live Element: Taste Skill "The One Live Thing" */}
      <section className="py-20 border-b border-white/[0.08] bg-ground-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Interactive Tool</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">Executive Inquiry Builder</h2>
            <p className="text-sm text-ink-muted mt-2">
              Select your organization's core objective to prepare an instant consultation brief.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-lg bg-ground-card border border-white/[0.1]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setSelectedFocus('ideahub')}
                className={`px-4 py-3 rounded text-sm font-semibold text-left transition-all ${
                  selectedFocus === 'ideahub'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white/[0.05] text-ink-muted hover:bg-white/[0.08]'
                }`}
              >
                Huawei IdeaHub
              </button>
              <button
                type="button"
                onClick={() => setSelectedFocus('channels')}
                className={`px-4 py-3 rounded text-sm font-semibold text-left transition-all ${
                  selectedFocus === 'channels'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white/[0.05] text-ink-muted hover:bg-white/[0.08]'
                }`}
              >
                Channel Partnerships
              </button>
              <button
                type="button"
                onClick={() => setSelectedFocus('enterprise')}
                className={`px-4 py-3 rounded text-sm font-semibold text-left transition-all ${
                  selectedFocus === 'enterprise'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white/[0.05] text-ink-muted hover:bg-white/[0.08]'
                }`}
              >
                Enterprise IT Sales
              </button>
            </div>

            <div className="p-4 rounded bg-black/40 border border-white/[0.08] mb-6 font-mono text-xs text-ink-muted leading-relaxed">
              <div className="text-ink font-semibold mb-1">To: waseem.patel@gmail.com</div>
              <div className="text-accent font-semibold mb-3">Subject: {inquiryDrafts[selectedFocus].subject}</div>
              <div className="whitespace-pre-line">{inquiryDrafts[selectedFocus].body}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:waseem.patel@gmail.com?subject=${encodeURIComponent(inquiryDrafts[selectedFocus].subject)}&body=${encodeURIComponent(inquiryDrafts[selectedFocus].body)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                Launch in Email Client
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="px-6 py-3 rounded bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-white/[0.1]"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Get in Touch</span>
              <h2 className="text-4xl font-bold tracking-tight text-white mt-2">Ready to Connect?</h2>
              <p className="text-ink-muted text-base mt-4 leading-relaxed">
                Whether you need advice on deploying Huawei IdeaHub collaboration systems, accelerating enterprise channel growth in the UAE, or evaluating strategic technology solutions, I welcome the opportunity to discuss.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:waseem.patel@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-ground-card border border-white/[0.08] hover:border-accent/40 transition-all text-white"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 text-accent flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted uppercase font-mono">Email Directly</div>
                    <div className="font-semibold text-base">waseem.patel@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+971502031941"
                  className="flex items-center gap-4 p-4 rounded-lg bg-ground-card border border-white/[0.08] hover:border-accent/40 transition-all text-white"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 text-accent flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted uppercase font-mono">Mobile / WhatsApp</div>
                    <div className="font-semibold text-base">+971 50 203 1941</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-ground-card border border-white/[0.08] text-white">
                  <div className="w-10 h-10 rounded bg-accent/10 text-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted uppercase font-mono">Location</div>
                    <div className="font-semibold text-base">Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col justify-between p-8 rounded-xl bg-ground-card border border-white/[0.1]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Connect Across Platforms</h3>
                <p className="text-sm text-ink-muted mb-6">
                  Access professional credentials, network history, and open repositories.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/waseempatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors text-white font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-accent" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted" />
                  </a>

                  <a
                    href="https://github.com/waseem-patel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors text-white font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-ink-muted" />
                      <span>GitHub Account</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-ink-muted flex items-center justify-between">
                <span>Free static Next.js setup</span>
                <span>Zero tracking · No database</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer: Taste Skill "The Name Returns at Full Width" */}
      <footer className="py-12 border-t border-white/[0.08] bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-ink-muted">
          <div>
            <span className="font-bold text-white tracking-wide">WASEEM PATEL</span> · Enterprise IT Sales Leader
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

