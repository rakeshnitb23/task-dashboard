# Task Dashboard

A simple task management application built with React. This dashboard helps you organize and track your work across different stages, from initial backlog to completion.

## Demo

See the application in action: [demo.mp4](./demo.mp4)
[View on Google Drive](https://drive.google.com/file/d/1snAqEVVvySSlcJwjPmulRAeKvpT0Rgz3/view?usp=sharing)

## Features

The application includes the following functionality:

- Kanban-style board with four columns: Backlog, In Progress, Review, and Done
- Drag and drop tasks between different status columns
- Task cards showing title, description, priority level, assignee, and due date
- Tagging system to categorize tasks
- Statistics overview showing total tasks, active tasks, completed tasks, and high-priority items
- Search functionality to filter tasks by title, description, or tags
- Form to add new tasks with all relevant details

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000). The page reloads automatically when you make changes to the code.

## Available Commands

### Running Tests

```bash
npm test
```

This launches the test runner in watch mode.

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder. The build is minified and ready for deployment.

## Tech Stack

- React 19
- lucide-react for icons
- Create React App for tooling and build configuration

## Project Structure

The main application logic is in `src/App.jsx`, with individual components organized in the `src/components/` directory. Tasks are managed using React state, and the interface updates reactively as you interact with the board.

## How to Use

When you first open the application, you'll see some example tasks already on the board. You can:

1. Search for specific tasks using the search bar in the header
2. View statistics about your tasks in the cards at the top
3. Move tasks between columns by dragging them or using the status dropdown
4. Add new tasks by filling out the form at the bottom of the page
5. Filter tasks by clicking on tags

All task data is stored in the browser's memory during your session.
