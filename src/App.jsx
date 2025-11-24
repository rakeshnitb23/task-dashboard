import { useMemo, useState } from 'react';
import { CheckCircle2, Flame, LayoutDashboard, Timer } from 'lucide-react';
import Header from './components/Header/Header';
import TaskBoard from './components/TaskBoard/TaskBoard';
import TaskForm from './components/TaskForm/TaskForm';
import StatsCard from './components/Stats/StatsCard';
import './App.css';

const STATUSES = [
  { id: 'backlog', name: 'Backlog', accent: '#475569' },
  { id: 'in-progress', name: 'In Progress', accent: '#b45309' },
  { id: 'review', name: 'Review', accent: '#0369a1' },
  { id: 'done', name: 'Done', accent: '#15803d' },
];

const INITIAL_TASKS = [
  {
    id: 'T-2401',
    title: 'Revamp authentication flow',
    description: 'Simplify SSO and passwordless entry points for faster onboarding.',
    status: 'in-progress',
    priority: 'high',
    owner: 'Nora',
    due: '2024-07-05',
    tags: ['Product', 'UX'],
  },
  {
    id: 'T-2402',
    title: 'Analytics instrumentation',
    description: 'Ship events for the activation funnel and retention cohorts.',
    status: 'backlog',
    priority: 'medium',
    owner: 'Alex',
    due: '2024-07-12',
    tags: ['Analytics'],
  },
  {
    id: 'T-2403',
    title: 'Design token migration',
    description: 'Migrate legacy theme tokens to the new design system palette.',
    status: 'review',
    priority: 'medium',
    owner: 'Priya',
    due: '2024-06-30',
    tags: ['Design', 'System'],
  },
  {
    id: 'T-2404',
    title: 'QA payment edge cases',
    description: 'Validate proration and retry flows across Stripe and Braintree.',
    status: 'done',
    priority: 'low',
    owner: 'Chris',
    due: '2024-06-20',
    tags: ['QA', 'Payments'],
  },
  {
    id: 'T-2405',
    title: 'Performance budget check',
    description: 'Audit bundle size and long tasks for the marketing site.',
    status: 'in-progress',
    priority: 'high',
    owner: 'Jordan',
    due: '2024-06-27',
    tags: ['Performance'],
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [query, setQuery] = useState('');

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((task) => task.status === 'done').length;
    const inProgress = tasks.filter((task) => task.status === 'in-progress').length;
    const highPriority = tasks.filter((task) => task.priority === 'high').length;
    const completion = total ? Math.round((done / total) * 100) : 0;

    return { total, done, inProgress, highPriority, completion };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (!query.trim()) {
      return tasks;
    }

    const value = query.toLowerCase();
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(value) ||
        task.description.toLowerCase().includes(value) ||
        task.tags.some((tag) => tag.toLowerCase().includes(value))
    );
  }, [tasks, query]);

  const handleAddTask = (taskData) => {
    const id = `T-${Date.now().toString().slice(-5)}`;
    setTasks((prev) => [
      {
        ...taskData,
        id,
        status: taskData.status || 'backlog',
        tags: taskData.tags?.length ? taskData.tags : [],
      },
      ...prev,
    ]);
  };

  const handleMoveTask = (taskId, status) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  return (
    <div className="app-shell">
      <Header onSearch={setQuery} />

      <main className="content">
        <section className="stats-grid">
          <StatsCard
            icon={LayoutDashboard}
            label="Total tasks"
            value={stats.total}
            helper={`${stats.completion}% done`}
          />
          <StatsCard
            icon={Timer}
            label="In motion"
            value={stats.inProgress}
            helper="Actively being pushed"
          />
          <StatsCard
            icon={CheckCircle2}
            label="Completed"
            value={stats.done}
            helper="Shipped recently"
          />
          <StatsCard
            icon={Flame}
            label="High priority"
            value={stats.highPriority}
            helper="Needs early attention"
          />
        </section>

        <section className="card board-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pipeline</p>
              <h2>Task Board</h2>
              <p className="muted">
                Track work across stages, keep momentum, and spot blockers early.
              </p>
            </div>
            <div className="pill strong">{filteredTasks.length} items</div>
          </div>

          <TaskBoard statuses={STATUSES} tasks={filteredTasks} onMoveTask={handleMoveTask} />
        </section>

        <section className="card form-card">
          <TaskForm statuses={STATUSES} onAddTask={handleAddTask} />
        </section>
      </main>
    </div>
  );
}

export default App;
