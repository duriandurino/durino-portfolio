import type { Project } from '@/lib/types';

/**
 * ========================================
 * 🎨 CAROUSEL IMAGES - EASY TO EDIT! 🎨
 * ========================================
 * 
 * To update project images in the carousel:
 * 
 * 1. Simply change the 'imageUrl' field for each project below
 * 2. You can use:
 *    - Direct URLs (e.g., "https://yoursite.com/image.jpg")
 *    - Unsplash URLs (currently using placeholders)
 *    - Local images from the /public folder (e.g., "/images/project1.jpg")
 * 
 * 3. For local images:
 *    - Create a /public/images folder in your project root
 *    - Place your images there
 *    - Reference them as "/images/your-image-name.jpg"
 * 
 * Example:
 *   imageUrl: "/images/link-n-park.jpg"
 *   imageUrl: "https://mysite.com/segurad-homes.png"
 * 
 * ========================================
 * 🖼️ GALLERY IMAGES - EASY TO EDIT! 🖼️
 * ========================================
 * 
 * To add gallery images for the project detail page:
 * 
 * 1. Edit the 'gallery' array for each project
 * 2. Add as many images as you want (they'll appear in a grid)
 * 3. Same rules apply: use local paths or remote URLs
 * 
 * Example:
 *   gallery: [
 *     "/images/project1-screen1.jpg",  // 👈 Add your images here
 *     "/images/project1-screen2.jpg",
 *     "/images/project1-screen3.jpg"
 *   ]
 * 
 * ========================================
 */

export const PROJECTS: Project[] = [
  {
    title: "Link n Park",
    year: "2025",
    description: "AI-powered automated parking management solution focused on space optimization and seamless user entry/exit workflows. Prototyped for Innovate Cebu.",
    tags: ["AI", "Next.js", "Computer Vision", "UI/UX"],
    category: "Hackathon Winner",
    slug: "link-n-park", // URL: /projects/link-n-park
    // 👇 EDIT THIS LINE to change the carousel image
    imageUrl: "/images/linknpark-0.png",
    // 👇 EDIT THIS ARRAY to add/change gallery images
    gallery: [
      "/images/linknpark-0.png",
      "/images/linknpark-1.png",
      "/images/linknpark-2.png",
      "/images/linknpark-3.png",
      "/images/linknpark-4.png",
      "/images/linknpark-5.png",
      "/images/linknpark-6.png",
      "/images/linknpark-7.png",
    ]
  },
  {
    title: "Segurad Homes",
    year: "2025",
    description: "Real-estate solution featuring digitalized contract binding, solving client trust issues through secured online transaction logic. Developed for HackEstate.",
    tags: ["Fintech", "Security", "React", "Node.js"],
    category: "Hackathon Project",
    slug: "segurad-homes", // URL: /projects/segurad-homes
    // 👇 EDIT THIS LINE to change the carousel image
    imageUrl: "/images/seguradhomes-0.png",
    // 👇 EDIT THIS ARRAY to add/change gallery images
    gallery: [
      "/images/seguradhomes-0.png",
      "/images/seguradhomes-1.png",
      "/images/seguradhomes-2.png",
      "/images/seguradhomes-3.png",
      "/images/seguradhomes-4.png",
      "/images/seguradhomes-5.png",
      "/images/seguradhomes-6.jpg",
    ]
  },
  {
    title: "TinabangAI",
    year: "2025",
    description: "Modernized disaster response system using AI to facilitate real-time communication and resource allocation during emergencies.",
    tags: ["Emergency Response", "Gemini AI", "Real-time"],
    category: "Hackathon Project",
    slug: "tinabang-ai", // URL: /projects/tinabang-ai
    // 👇 EDIT THIS LINE to change the carousel image
    imageUrl: "/images/tinabangai-0.png",
    // 👇 EDIT THIS ARRAY to add/change gallery images
    gallery: [
      "/images/tinabangai-0.png",
      "/images/tinabangai-1.png",
      "/images/tinabangai-2.jpg",
    ]
  },
  {
    title: "Aginod",
    year: "2025",
    description: "Relief tracker application to improve the transparency and efficiency of donation drives for local non-profit organizations.",
    tags: ["Charity Tech", "Tracking", "Fullstack"],
    category: "Social Good",
    slug: "aginod", // URL: /projects/aginod
    // 👇 EDIT THIS LINE to change the carousel image
    imageUrl: "/images/aginod-0.jpeg",
    // 👇 EDIT THIS ARRAY to add/change gallery images
    gallery: [
      "/images/aginod-0.jpeg",
      "/images/aginod-1.jpeg",
      "/images/aginod-2.jpeg",
      "/images/aginod-3.jpeg",
      "/images/aginod-4.jpeg",
      "/images/aginod-5.jpeg",
    ]
  }
];


