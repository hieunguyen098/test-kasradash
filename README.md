# Kasra Dashboard

A modern dashboard built with Next.js, Shadcn UI, and TypeScript. This project demonstrates the implementation of a responsive dashboard with form validation, state management, and dark mode support.

## Features

- 🎨 Modern UI with Shadcn UI components
- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive design with mobile-first approach
- 📊 Interactive dashboard with statistics and analytics
- 📝 Form validation with React Hook Form + Zod
- 💾 State management with Zustand
- 🔒 Form state persistence across sessions
- 👤 User profile display in header
- ✅ Success notifications for form submissions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Form Handling**: React Hook Form + Zod
- **State Management**: Zustand with persistence
- **Theme**: next-themes for dark mode
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/hieunguyen098/test-kasradash.git
   cd test-kasradash
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo

- 🌐 **Live Demo**: [https://kasra-dashboard.vercel.app](https://kasra-dashboard.vercel.app)
- 📦 **GitHub Repository**: [https://github.com/hieunguyen098/test-kasradash.git](https://github.com/hieunguyen098/test-kasradash.git)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Dashboard page
│   └── settings/          # Settings page
├── components/            # React components
│   ├── dashboard/        # Dashboard components
│   │   ├── stat-card.tsx    # Statistics card
│   │   ├── list-card.tsx    # List display card
│   │   └── analytics-dialog.tsx # Analytics modal
│   ├── settings/         # Settings components
│   │   ├── form-field.tsx    # Form field component
│   │   └── success-dialog.tsx # Success notification
│   ├── ui/               # Shadcn UI components
│   ├── theme-provider.tsx # Theme provider
│   ├── theme-toggle.tsx   # Dark mode toggle
│   └── user-info.tsx     # User profile display
└── lib/                  # Utilities and store
    └── store.ts          # Zustand store with persistence
```

## Features in Detail

### Dashboard

- Responsive grid layout with statistics cards
- List cards showing various metrics with trends
- Interactive analytics dialog
- Real-time data updates
- Mobile-optimized layout

### Settings

- Form validation with error messages
- Persistent form state
- Success notifications
- Responsive form layout
- Password field with secure input

### User Experience

- Dark mode support with system preference
- Persistent user preferences
- Responsive navigation
- User profile display in header
- Smooth transitions and animations

### State Management

- Zustand for global state
- Persistent storage for user data
- Type-safe state updates
- Efficient re-rendering

## Best Practices Implemented

1. **Component Structure**

   - Modular and reusable components
   - Clear separation of concerns
   - Type-safe props and state
   - Consistent naming conventions

2. **Type Safety**

   - Full TypeScript implementation
   - Zod schema validation
   - Type-safe form handling
   - Proper error handling

3. **Accessibility**

   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

4. **Responsive Design**

   - Mobile-first approach
   - Flexible grid layouts
   - Responsive typography
   - Proper spacing on all devices

5. **Code Organization**
   - Feature-based structure
   - Clear file naming
   - Consistent code style
   - Proper documentation

## Assumptions and Shortcuts

1. **Mock Data**: The dashboard uses static mock data for demonstration
2. **Authentication**: No authentication system implemented
3. **API Integration**: No backend API integration
4. **Data Refresh**: No real-time data updates
5. **Error Handling**: Basic error handling for form validation

## License

MIT
