# Accredian Enterprise Website Clone

A high-performance, pixel-perfect recreation of the Accredian Enterprise landing page. Built with Next.js 15, Tailwind CSS, and optimized for speed and responsiveness.

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/Preiz68/accredian-clone.git>
   cd accredian-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Approach Taken

My development process focused on achieving visual fidelity while maintaining modern engineering standards:

- **Visual-First Implementation**: I utilized **Antigravity** to translate high-resolution design screenshots directly into clean, semantic React code.
- **Pixel-Perfect Refinement**: Leveraging browser **DevTools**, I meticulously adjusted spacing, typography, and color palettes (using HSL and custom hex codes) to ensure the implementation precisely matched the original design.
- **Complex UI Logic**: I integrated AI-driven logic to build interactive features that go beyond static HTML, including:
  - **Dynamic Scroll-Spy Navigation**: A custom `IntersectionObserver` implementation that highlights Navbar links based on the user's current section.
  - **Responsive Scrollable Cards**: Horizontal carousels with snap points and synchronized pagination dots for both mobile and tablet views.
  - **Frictionless UX**: Added smooth scrolling, custom scroll-arrow visibility for FAQ tabs, and optimized LCP (Largest Contentful Paint).

---

## 🤖 AI Usage Explanation

This project was built in collaboration with **Antigravity**, a powerful AI coding assistant.

- **Code Generation**: AI was used to draft the initial structural components from visual inputs.
- **Optimization**: AI assisted in refactoring the application into a mix of Server and Client components, implementing code-splitting with `next/dynamic`, and resolving complex hydration issues related to responsive media queries.
- **Problem Solving**: AI helped debug responsive breakpoints and ensured the project adhered to DRY (Don't Repeat Yourself) principles through shared components like `SectionHeader`.

---

## 📈 Future Improvements

Given more time, the following enhancements would be prioritized:

- **100% Design Perfection**: Further fine-tuning of micro-interactions and transitions to reach an absolute 1:1 match with the design at every possible sub-pixel level.
- **Full Lead-Gen Backend**: Integrating the "Enquire Now" buttons with a robust backend service or form provider.
- **Enhanced Accessibility**: Implementing full ARIA coverage and keyboard navigation for all interactive carousels and FAQ sections.
- **Automated Testing**: Adding Playwright or Cypress tests to ensure responsive logic remains consistent across all viewport sizes.
