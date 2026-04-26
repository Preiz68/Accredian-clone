import {
  Lightbulb,
  LayoutPanelTop,
  Settings2,
  BarChart3,
  Presentation,
  MonitorPlay,
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
  Brain,
  Users,
  ChartNoAxesColumnIncreasing,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Stats", href: "#stats" },
  { name: "Clients", href: "#clients" },
  { name: "Accredian Edge", href: "#accredianEdge" },
  { name: "CAT", href: "#cat" },
  { name: "How It Works", href: "#howItWorks" },
  { name: "FAQs", href: "#faqs" },
  { name: "Testimonials", href: "#testimonials" },
];

export const stats = [
  {
    value: "10K+",
    label: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    label: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
  },
];

export const segments = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/course-img-1.webp",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/course-img-2.webp",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/course-img-3.webp",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/course-img-4.webp",
  },
];

export const faqData = [
  {
    section: "About the Course",
    questions: [
      {
        question:
          "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian offers a wide range of corporate training programs including Executive Education, Post Graduate Certificates, and specialized workshops in Data Science, AI, Product Management, and more.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We offer specializations in various high-demand domains such as Machine Learning, Design Thinking, Business Analytics, Cybersecurity, Cloud Computing, and Strategic Leadership.",
      },
    ],
  },
  {
    section: "About the Delivery",
    questions: [
      {
        question: "How are the training sessions delivered?",
        answer:
          "Our sessions are delivered through a hybrid model, combining live instructor-led sessions, interactive workshops, and self-paced learning modules to ensure maximum engagement.",
      },
      {
        question: "Can the schedule be customized for our team?",
        answer:
          "Yes, we work closely with organizations to create customized schedules that fit their team's availability and project timelines without disrupting business operations.",
      },
    ],
  },
  {
    section: "Miscellaneous",
    questions: [
      {
        question: "What is the typical duration of a program?",
        answer:
          "Program duration varies based on the specialization and depth, ranging from intensive 2-day workshops to comprehensive 6-month executive certification programs.",
      },
      {
        question: "How do we get started with a partnership?",
        answer:
          "You can start by clicking the 'Enquire Now' button. Our team will reach out to understand your requirements and propose a tailored learning path for your organization.",
      },
    ],
  },
];

export const testimonials = [
  {
    logo: "/partner-5.svg",
    text: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    company: "ADP",
  },
  {
    logo: "/partner-6.svg",
    text: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    company: "Bayer",
  },
  {
    logo: "/partner-1.png",
    text: '"The partnership with Accredian has been transformative. Their approach to professional development is unique and highly effective, delivering measurable results for our workforce."',
    company: "ADP",
  },
];

export const frameworkItems = [
  {
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[15%] md:left-[18%]",
  },
  {
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: <LayoutPanelTop className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[50%] md:left-[45%]",
  },
  {
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: <Settings2 className="w-8 h-8 md:w-12 md:h-12 text-[#1D7AE5]" />,
    pos: "left-[85%] md:left-[72%]",
  },
];

export const deliverySteps = [
  {
    number: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: <Presentation className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
  },
];

export const partners = [
  {
    src: "/partner-1.png",
    alt: "client",
    width: 100,
    height: 100,
    className: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
  },
  {
    src: "/partner-2.png",
    alt: "client",
    width: 160,
    height: 160,
    className: "w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40",
  },
  {
    src: "/partner-3.png",
    alt: "client",
    width: 100,
    height: 100,
    className: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
  },
  {
    src: "/partner-4.png",
    alt: "client",
    width: 100,
    height: 100,
    className: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
  },
  {
    src: "/partner-5.svg",
    alt: "client",
    width: 100,
    height: 100,
    className: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
  },
  {
    src: "/partner-6.svg",
    alt: "client",
    width: 100,
    height: 100,
    className: "w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24",
  },
];

export const skills = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: <MonitorCheck className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: <MonitorX className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: <GraduationCap className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: <Briefcase className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />,
  },
];

export const domainExpertise = [
  {
    title: "Product & Innovation Hub",
    icon: (
      <Lightbulb className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Gen-AI Mastery",
    icon: (
      <Brain className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Leadership Elevation",
    icon: (
      <Users className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Tech & Data Insights",
    icon: (
      <ChartNoAxesColumnIncreasing className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Operations Excellence",
    icon: (
      <Settings className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Digital Enterprise",
    icon: (
      <Globe className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
  {
    title: "Fintech Innovation Lab",
    icon: (
      <Banknote className="text-blue-600 font-semibold w-6 h-6 md:w-14 md:h-14 mr-2 md:mr-0 md:mb-2" />
    ),
  },
];
