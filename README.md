# Accredian Enterprise Website Clone

This project is a pixel-perfect recreation of the Accredian Enterprise landing page hero section and navigation, built using Next.js (App Router) and Tailwind CSS.

## Setup Instructions

1.  **Clone the repository:**
    \`\`\`bash
    git clone <your-repo-url>
    cd accredian-clone
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    \`\`\`

4.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach Taken

-   **Framework:** Next.js 15 (App Router) for a modern, performant, and scalable React application structure.
-   **Styling:** Tailwind CSS v4 for rapid UI development and pixel-perfect replication of the design.
-   **Components:**
    -   \`Navbar.tsx\`: A responsive navigation component handling both desktop links and a mobile hamburger menu. The logo is built entirely with CSS and text to ensure pixel perfection and crisp scaling.
    -   \`page.tsx\`: The main Hero section is built using a CSS grid and flexbox to handle the complex layout differences between mobile (stacked) and desktop (side-by-side with overlapping elements).
-   **Responsiveness:** Utilized Tailwind's breakpoint utilities (\`md:\`, \`lg:\`) to seamlessly transition between the mobile and desktop views provided in the screenshots.
-   **Icons:** \`lucide-react\` is used for SVG icons (checkmarks, hamburger menu) to keep the bundle size small and the icons infinitely scalable.

## AI Usage Explanation

This project was developed with the assistance of Antigravity (powered by Google DeepMind's Gemini model). The AI was utilized for:
-   **Code Generation:** Scaffolding the Next.js project structure and generating React components based on textual descriptions of the provided screenshots.
-   **CSS Translation:** Converting the visual design details (colors, typography, layout structures) from the screenshots into precise Tailwind CSS utility classes.
-   **Asset Generation:** Creating a representative hero image of two corporate professionals on a light blue background using an internal image generation tool, to closely match the original design intent without needing the exact source assets.
-   **Workflow Automation:** Running terminal commands to install dependencies, manage files, and execute builds.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
