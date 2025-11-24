import { Bell, Plus, Search, Sparkles } from 'lucide-react';

function Header({ onSearch }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Task Flow</h1>
        </div>
      </div>

      <div className="header-controls">
        <div className="search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Search tasks, owners, tags..."
            aria-label="Search tasks"
            onChange={(event) => onSearch?.(event.target.value)}
          />
        </div>
        <button className="ghost-btn" type="button">
          <Bell size={18} />
        </button>
        <button
          className="primary-btn"
          type="button"
          onClick={() => {
            const form = document.getElementById('task-form');
            form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            form?.querySelector('input')?.focus();
          }}
        >
          <Plus size={18} />
          New task
        </button>
      </div>
    </header>
  );
}

export default Header;
