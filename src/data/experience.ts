/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION (or most recent)
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Full-Stack Engineer',
    company: 'ENY Consulting & Advisory Services Ltd.',
    location: 'Victoria Island, Lagos (Hybrid)',
    type: 'full-time',
    startDate: '2025-01',
    current: true,
    description:
      'Managing data pipelines and building full-stack solutions for multiple external websites.',
    achievements: [
      'Managing data pipelines for ~4 external websites (blog, scholarship, fellowship, applicant tracking)',
      'Collaborating directly with CEO on product strategy and feature roadmaps',
      'Conducting morning system health checks across AWS, Vercel, MongoDB, and Resend',
      'Running weekly sprint planning and Friday codebase reviews via GitHub/ESLint',
      'Delivering backend API integrations and email template systems',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'MongoDB',
      'AWS',
      'Vercel',
      'Resend',
    ],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Full-Stack Developer',
    company: 'TRY MAGE',
    location: 'Remote',
    type: 'full-time',
    startDate: '2023-05',
    current: true,
    description: 'Building modern React/TypeScript interfaces and scalable REST APIs.',
    achievements: [
      'Designed and delivered responsive React/TypeScript interfaces reducing design-to-production cycles',
      'Provisioned scalable REST API endpoints improving developer onboarding',
      'Applied lazy loading and code-splitting achieving ~30% faster page load times',
      'Integrated Stripe payment APIs and Mixpanel analytics',
      'Deployed on Vercel with CI/CD workflows maintaining uptime SLAs',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Stripe',
      'Vercel',
      'MongoDB',
    ],
  },

  // ---------------------------------------------------------------------------
  // CONTRACT POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-3',
    title: 'Frontend Developer (Contract)',
    company: 'Hush Chat',
    location: 'Remote',
    type: 'contract',
    startDate: '2023-10',
    endDate: '2023-12',
    current: false,
    description: 'Building real-time messaging features.',
    achievements: [
      'Integrated REST APIs and WebSocket enabling real-time messaging with sub-1s latency',
      'Strengthened authentication flows improving onboarding performance',
      'Optimized mobile responsiveness driving ~25% uplift in mobile user engagement',
    ],
    technologies: ['React', 'TypeScript', 'WebSocket', 'REST APIs'],
  },

  // ---------------------------------------------------------------------------
  // FREELANCE
  // ---------------------------------------------------------------------------
  {
    id: 'exp-4',
    title: 'Freelance Full-Stack Developer',
    company: 'Independent',
    location: 'Remote',
    type: 'freelance',
    startDate: '2021-01',
    endDate: '2023-04',
    current: false,
    description: 'Built various web applications for multiple clients.',
    achievements: [
      'Matan Hub — e-commerce platform with Stripe payments and CMS',
      'The Property Main — real estate platform with MongoDB search',
      'Royal Ankara — fabric store with Paystack integration and admin CMS',
      'Wonder Kiddies Store — e-commerce with payment API and order tracking',
      'Western Skyline Properties — corporate portfolio site',
    ],
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Stripe',
      'Paystack',
      'Express',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
