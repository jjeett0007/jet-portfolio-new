/**
 * =============================================================================
 * PROFILE DATA - Personal Information
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains all personal information displayed on the resume.
 * 
 * TO CUSTOMIZE:
 * 1. Replace ALL placeholder values with real information
 * 2. Update the photo path or use empty string '' for no photo
 * 3. Add/remove social links as needed
 * 4. Keep the summary concise (2-4 sentences recommended)
 * 5. Highlights should be measurable achievements (numbers are good!)
 *
 * EXAMPLES FOR AI:
 * - To change name: profile.name = 'Your Full Name'
 * - To change title: profile.title = 'Your Job Title'
 * - To update email: profile.email = 'your.email@example.com'
 * - To add/remove highlights: modify the highlights array
 * =============================================================================
 */

/**
 * Profile type definition
 * All fields are required unless marked optional
 */
export interface Profile {
  /** Full name as it should appear on the resume */
  name: string;

  /** Professional title/headline (e.g., "Senior Software Engineer", "UX Designer") */
  title: string;

  /**
   * Profile photo path
   * - Use '/images/profile.jpg' for local image in public/images/
   * - Use full URL for external image
   * - Use '' (empty string) to hide the photo
   */
  photo: string;

  /** Professional email address */
  email: string;

  /**
   * Phone number (optional)
   * Format: Include country code for international (e.g., "+1 555-123-4567")
   */
  phone?: string;

  /**
   * Location
   * Format: "City, Country" or "City, State" or "Remote"
   */
  location: string;

  /** Personal website URL (optional) */
  website?: string;

  /** LinkedIn profile URL (optional) */
  linkedin?: string;

  /** GitHub profile URL (optional) */
  github?: string;

  /** Twitter/X profile URL (optional) */
  twitter?: string;

  /**
   * Professional summary
   * - Keep it 2-4 sentences
   * - Highlight years of experience, expertise areas, and what you're passionate about
   * - Use active voice and strong verbs
   */
  summary: string;

  /**
   * Key highlights/achievements (shown prominently on profile)
   * - Use 3-5 highlights
   * - Include metrics when possible (numbers, percentages, etc.)
   * - Start each with an action verb
   */
  highlights: string[];
}

/**
 * =============================================================================
 * YOUR PROFILE DATA - CUSTOMIZE BELOW
 * =============================================================================
 * 
 * Replace ALL values below with your actual information.
 * Delete or comment out any optional fields you don't want to use.
 */
export const profile: Profile = {
  // -------------------------------------------------------------------------
  // BASIC INFO (Required)
  // -------------------------------------------------------------------------
  name: 'Dosumu Olayinka Daniel',
  title: 'Full-Stack Engineer',
  photo: '', // Set to '' to hide photo
  email: 'dosumuolayinka151@gmail.com',
  location: 'Lagos, Nigeria',

  // -------------------------------------------------------------------------
  // CONTACT & SOCIAL (Optional - remove or set to undefined if not needed)
  // -------------------------------------------------------------------------
  linkedin: 'https://linkedin.com/in/dosumu-olayinka',
  github: 'https://github.com/dosumuolayinka',
  website: 'https://aigenesis.site',
  phone: '+234 706 500 9499',

  // -------------------------------------------------------------------------
  // PROFESSIONAL SUMMARY
  // Keep this concise: 2-4 sentences that capture who you are professionally
  // -------------------------------------------------------------------------
  summary: `Results-driven Full-Stack Engineer with 4+ years of experience architecting and shipping scalable web applications across fintech, edtech, e-commerce, and AI-powered SaaS platforms. Deep expertise across the modern JavaScript/TypeScript ecosystem (React, Next.js, Node.js, Express) paired with strong backend proficiency in MongoDB, PostgreSQL, Prisma, and Redis. Proven track record building production-grade systems: from multi-tenant CRMs and LMS platforms to AI-integrated tools and real-time communication apps.`,

  // -------------------------------------------------------------------------
  // KEY HIGHLIGHTS
  // 3-5 achievement statements with metrics when possible
  // -------------------------------------------------------------------------
  highlights: [
    'Scaled Genesis AI to 5,000+ beta users as solo builder',
    'Reduced runtime bugs by ~70% through TypeScript migration',
    'Achieved ~30% performance improvement via code-splitting and caching',
    'Built multi-tenant SaaS RBAC systems with org slug-free login',
  ],
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get profile social links as an array
 * Useful for iterating over social links in components
 */
export function getProfileSocialLinks(): Array<{ platform: string; url: string }> {
  const links: Array<{ platform: string; url: string }> = [];

  if (profile.github) links.push({ platform: 'github', url: profile.github });
  if (profile.linkedin) links.push({ platform: 'linkedin', url: profile.linkedin });
  if (profile.twitter) links.push({ platform: 'twitter', url: profile.twitter });
  if (profile.website) links.push({ platform: 'website', url: profile.website });

  return links;
}

/**
 * Check if profile has a photo
 */
export function hasProfilePhoto(): boolean {
  return Boolean(profile.photo && profile.photo.length > 0);
}

/**
 * Get profile initials (for avatar fallback)
 */
export function getProfileInitials(): string {
  return profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
