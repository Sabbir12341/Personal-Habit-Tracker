# Habit Tracker 📊

A modern, minimalist habit tracking application built with React and TypeScript. Track your daily habits with an intuitive weekly view and monitor your progress seamlessly.

## Features ✨

- **Add Habits** - Create new habits with a simple form interface
- **Weekly View** - Navigate through weeks to track habits across days
- **Persistent Storage** - All habits are automatically saved to localStorage
- **Responsive Design** - Clean, modern UI built with Tailwind CSS
- **Type-Safe** - Full TypeScript support for reliable code
- **Date Navigation** - Easy navigation between weeks with next/previous controls

## Tech Stack 🛠️

- **React 19** - UI library
- **TypeScript 6** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **date-fns** - Modern date utility library
- **ESLint** - Code quality and consistency
- **React Compiler** - React 19 compiler for optimized rendering

## Project Structure 📁

```
src/
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── HabitForm.tsx        # Form for adding new habits
│   ├── Habitlist.tsx        # Display list of habits
│   ├── HabitProviders.tsx   # React Context for habit state management
│   ├── Header.tsx           # Navigation header with week controls
│   └── Hooks/
│       └── LocalStorage.ts  # Custom hook for localStorage management
├── App.tsx                  # Main application component
├── main.tsx                 # React DOM render entry point
└── index.css               # Global styles
```

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/habit-tracker.git
   cd habit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

## Available Scripts 📝

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Usage 💡

1. **Add a Habit**
   - Enter a habit name in the input field at the top
   - Click the "Add Habit" button
   - Your habit will appear in the list below

2. **Track Progress**
   - Mark habits as complete for each day in the weekly view
   - The app automatically saves your progress

3. **Navigate Weeks**
   - Use the navigation arrows in the header to move between weeks
   - View past or future weeks to plan ahead

## Key Components 🧩

### HabitProviders
Manages global habit state using React Context. Provides:
- `addhabit()` - Add a new habit
- `habits` - Current list of habits
- Automatic localStorage persistence

### HabitForm
Form component for creating new habits with validation.

### Habitlist
Displays all habits in a weekly grid format with completion tracking.

### LocalStorage Hook
Custom hook for managing localStorage operations.

## Browser Support 🌐

Works on all modern browsers that support ES2020+:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Future Enhancements 🔮

- [ ] Data export/import functionality
- [ ] Habit statistics and analytics
- [ ] Multiple habit categories
- [ ] Dark/Light theme toggle
- [ ] Mobile app version
- [ ] Cloud synchronization

## Support 💬

If you have any questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Built with ❤️ using React + TypeScript**
