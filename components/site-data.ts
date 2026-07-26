import {
  BadgeCheck,
  CirclePlus,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe
} from "lucide-react";

export const contactInfo = {
  name: "SmileCare Dental Clinic",
  tagline: "Healthy Smiles, Happy Lives.",
  phone: "+91 98765 43210",
  email: "info@smilecaredental.com",
  address: "Near DBR Hospital Road, Korlagunta, Tirupati 517501, India"
};

export const businessHours = [
  { day: "Mon-Fri", time: "9:00 AM-6:00 PM" },
  { day: "Sat", time: "9:00 AM-2:00 PM" },
  { day: "Sun", time: "Closed" }
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/appointment", label: "Appointment" }
];

export const serviceOptions = [
  "Dental Checkups",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Dental Implants"
];

export const featuredServices = [
  {
    title: "Dental Checkups",
    description: "Routine exams, cleaning guidance, and preventive care for long-term oral health.",
    icon: Stethoscope,
    href: "/services#dental-checkups"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and smile makeover planning for confident, natural results.",
    icon: Sparkles,
    href: "/services#cosmetic-dentistry"
  },
  {
    title: "Orthodontics",
    description: "Metal braces, ceramic braces, and clear aligners with careful treatment timelines.",
    icon: Smile,
    href: "/services#orthodontics"
  },
  {
    title: "Dental Implants",
    description: "Implant consultations, procedure planning, recovery guidance, and eligibility checks.",
    icon: CirclePlus,
    href: "/services#dental-implants"
  }
];

export const allServices = [
  "General Dentistry",
  "Teeth Cleaning",
  "Root Canal",
  "Dental Implants",
  "Teeth Whitening",
  "Braces",
  "Veneers",
  "Pediatric Dentistry",
  "Emergency Dental Care"
];

export const detailedServices = [
  {
    id: "dental-checkups",
    title: "Dental Checkups",
    summary: "Comprehensive preventive visits that help detect issues early and keep your smile healthy.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    icon: ShieldCheck,
    sections: [
      {
        title: "Overview",
        content: "Dental checkups include a careful review of your teeth, gums, bite, and oral health history."
      },
      {
        title: "Benefits",
        content: "Regular visits support early diagnosis, fresher breath, healthier gums, and fewer dental emergencies."
      },
      {
        title: "Examination process",
        content: "Our dentist checks for cavities, gum concerns, plaque buildup, oral lesions, and signs of wear."
      },
      {
        title: "Preventive care",
        content: "We provide cleaning recommendations, fluoride guidance, brushing tips, and personalized recall plans."
      },
      {
        title: "Appointment CTA",
        content: "Schedule your dental checkup today to protect your smile before small concerns become bigger problems."
      }
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    summary: "Personalized cosmetic treatments designed to brighten, balance, and improve your smile.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
    sections: [
      {
        title: "Teeth Whitening",
        content: "Professional whitening helps reduce stains and brighten your smile safely and effectively."
      },
      {
        title: "Veneers",
        content: "Veneers can improve the appearance of chipped, uneven, stained, or mildly spaced teeth."
      },
      {
        title: "Smile Makeovers",
        content: "We combine cosmetic treatments into a plan tailored to your goals, face shape, and oral health."
      },
      {
        title: "Before & After gallery",
        content: "Placeholder gallery cards show how future patient cases can be displayed with consent."
      },
      {
        title: "Consultation CTA",
        content: "Book a cosmetic consultation to explore whitening, veneers, and makeover options."
      }
    ],
    gallery: true
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    summary: "Braces and aligner options that guide teeth into healthier, more confident positions.",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1200&q=80",
    icon: BadgeCheck,
    sections: [
      {
        title: "Metal Braces",
        content: "Reliable fixed braces for precise tooth movement and a wide range of alignment needs."
      },
      {
        title: "Ceramic Braces",
        content: "A tooth-colored option for patients who want effective treatment with a subtler look."
      },
      {
        title: "Clear Aligners",
        content: "Removable aligners can straighten mild to moderate cases with flexible daily wear."
      },
      {
        title: "Treatment timeline",
        content: "Treatment duration depends on complexity, oral health, and consistency with appointments or aligner wear."
      },
      {
        title: "FAQ",
        content: "During consultation, we answer questions about comfort, eating, cleaning, costs, and expected results."
      },
      {
        title: "Appointment CTA",
        content: "Schedule an orthodontic visit to compare braces and aligners for your smile."
      }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    summary: "Strong tooth replacement planning for eligible patients missing one or more teeth.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80",
    icon: Syringe,
    sections: [
      {
        title: "Implant procedure",
        content: "Implants are planned carefully, placed into the jawbone, and restored after healing with a natural-looking tooth."
      },
      {
        title: "Benefits",
        content: "Implants can improve chewing, speech, smile confidence, and support for surrounding teeth."
      },
      {
        title: "Recovery process",
        content: "Healing varies by patient, and our team gives clear instructions for comfort, hygiene, and follow-up care."
      },
      {
        title: "Eligibility",
        content: "We review bone health, gum health, medical history, and lifestyle factors before recommending implants."
      },
      {
        title: "Consultation CTA",
        content: "Book an implant consultation to understand your replacement options and treatment plan."
      }
    ]
  }
];

export const teamMembers = [
  {
    name: "Dr. Ananya Sharma",
    role: "General Dentist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Vikram Mehta",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Priya Nair",
    role: "Cosmetic Dentist",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dental Assistants & Support Staff",
    role: "Patient Care Team",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials = [
  {
    name: "Priya Sharma",
    review:
      "The dentists were friendly and professional. My treatment was painless, and the clinic was very clean. Highly recommended!"
  },
  {
    name: "Rahul Verma",
    review:
      "Excellent service and modern equipment. The staff explained every step of my root canal treatment, making me feel comfortable."
  },
  {
    name: "Sneha Reddy",
    review:
      "I had my teeth whitening done here, and the results exceeded my expectations. Great experience from start to finish."
  }
];
