/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Web Application',
  'SaaS',
  'E-Commerce',
  'Developer Tools',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'genesis-ai',
    title: 'Genesis AI',
    description:
      'Full-stack AI job application platform with AI-generated tailored resumes, cover letters, and Gmail-integrated recruiter email sending.',
    thumbnail: '/projects/genesis-ai-thumb.jpg',
    images: [],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Node.js', 'MongoDB', 'Gmail API'],
    category: 'SaaS',
    role: 'Solo Builder',
    duration: 'Ongoing',
    liveUrl: 'https://aigenesis.site',
    featured: true,
    highlights: [
      'Scaled to 5,000+ beta users',
      'AI-generated tailored resumes and cover letters',
      'Gmail-integrated recruiter email sending',
      'PDF resume generation',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'emergfunds',
    title: 'EmergFunds',
    description:
      'Solana-based transparent fundraising platform enabling on-chain, verifiable donation flows.',
    thumbnail: '/projects/emergfunds-thumb.jpg',
    images: [],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Helius', 'Solana Wallet Adapter'],
    category: 'Web Application',
    role: 'Full-Stack Developer',
    duration: '3 months',
    featured: true,
    highlights: [
      'Built on Solana blockchain',
      'Transparent on-chain donation tracking',
      'Verifiable donation flows',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'aria-browser-agent',
    title: 'ARIA — Autonomous Browser Agent',
    description:
      'Vision-based Chrome extension where an AI model controls the browser via screenshot + pixel coordinates.',
    thumbnail: '/projects/aria-thumb.jpg',
    images: [],
    technologies: ['Chrome Extension', 'AI Vision', 'JavaScript', 'Puppeteer'],
    category: 'Developer Tools',
    role: 'Creator',
    duration: '2 months',
    featured: true,
    highlights: [
      'Multi-page research automation',
      'Email composition via AI',
      'Dynamic JS injection',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 4
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'nextcms',
    title: 'NextCMS',
    description:
      'Strapi-like headless CMS boilerplate (Next.js 14+, TypeScript, Prisma, Zod, monorepo) supporting PostgreSQL, MongoDB, SQLite, and MySQL.',
    thumbnail: '/projects/nextcms-thumb.jpg',
    images: [],
    technologies: ['Next.js 14+', 'TypeScript', 'Prisma', 'Zod', 'PostgreSQL', 'MongoDB'],
    category: 'Developer Tools',
    role: 'Creator',
    duration: 'Ongoing',
    featured: false,
    highlights: [
      'Multi-database support (PostgreSQL, MongoDB, SQLite, MySQL)',
      'Monorepo architecture',
      'Type-safe with Zod validation',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 5 - Matan Hub
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'matan-hub',
    title: 'Matan Hub',
    description:
      'E-commerce platform with Stripe (USD) payments and CMS-driven content management.',
    thumbnail: '/projects/matan-hub-thumb.jpg',
    images: [],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    category: 'E-Commerce',
    role: 'Full-Stack Developer',
    duration: '2 months',
    featured: false,
    highlights: [
      'Stripe USD payments',
      'CMS-driven content management',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 6 - The Property Main
  // ---------------------------------------------------------------------------
  {
    id: 'proj-6',
    slug: 'the-property-main',
    title: 'The Property Main',
    description:
      'Real estate platform with MongoDB-backed property search and agent-user interactions.',
    thumbnail: '/projects/property-main-thumb.jpg',
    images: [],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Web Application',
    role: 'Full-Stack Developer',
    duration: '2 months',
    featured: false,
    highlights: [
      'MongoDB property search',
      'Agent-user interactions',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
