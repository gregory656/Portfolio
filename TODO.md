# Portfolio Improvement TODO

## Step 1: Create Data File
- [ ] Create `src/data/projects.js` and move projects array there, fixing image paths (e.g., 'steve.pg' to 'steve.png')

## Step 2: Create ProjectCard Component
- [ ] Create `src/components/ProjectCard.jsx` with enhanced animations (hover scale, shadow), glass blur effects, and proper accessibility

## Step 3: Update App.jsx
- [ ] Import projects from `src/data/projects.js`
- [ ] Replace inline project cards with ProjectCard component
- [ ] Add Framer Motion `whileInView` fade-in for sections (Skills, Projects, Contact)
- [ ] Enhance hero animations with smoother transitions
- [ ] Improve navbar with active states and smooth scrolling behavior
- [ ] Add subtle animations to navbar links
- [ ] Clean up code: remove unused imports, add comments

## Step 4: Update Skills.jsx
- [ ] Add `whileInView` animation to the skills section
- [ ] Enhance hover animations for better UX

## Step 5: Update App.css
- [ ] Add Windows 11-style soft shadows and rounded corners
- [ ] Implement glass blur effects on cards and sections
- [ ] Improve responsive design and spacing
- [ ] Add new animation keyframes if needed
- [ ] Ensure all styles are consistent and modern

## Step 6: Testing and Verification
- [ ] Test all animations and responsiveness
- [ ] Verify image loading and external links
- [ ] Check accessibility (alt texts, ARIA)
- [ ] Ensure no breaking changes and full functionality
