import { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';

function TaskForm({ statuses, onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(statuses?.[0]?.id ?? 'backlog');
  const [priority, setPriority] = useState('medium');
  const [owner, setOwner] = useState('');
  const [due, setDue] = useState('');
  const [tags, setTags] = useState('');

  const reset = () => {
    setTitle('');
    setDescription('');
    setStatus(statuses?.[0]?.id ?? 'backlog');
    setPriority('medium');
    setOwner('');
    setDue('');
    setTags('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    const tagList = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    onAddTask({
      title: title.trim(),
      description: description.trim() || 'No description yet.',
      status,
      priority,
      owner: owner.trim() || 'Unassigned',
      due,
      tags: tagList,
    });

    reset();
  };

  return (
    <form id="task-form" className="task-form" onSubmit={handleSubmit}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Add work</p>
          <h3>Quick Task Capture</h3>
          <p className="muted">Add a task with just the essentials—status and priority keep it moving.</p>
        </div>
        <span className="pill strong">
          <Sparkles size={14} />
          Instant
        </span>
      </div>

      <div className="form-grid">
        <label>
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Give the task a clear name"
            required
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What needs to be done?"
          />
        </label>
        <label>
          <span>Status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            {statuses.map((statusOption) => (
              <option key={statusOption.id} value={statusOption.id}>
                {statusOption.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Priority</span>
          <select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <label>
          <span>Owner</span>
          <input
            type="text"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
            placeholder="Who is driving this?"
          />
        </label>
        <label>
          <span>Due date</span>
          <input type="date" value={due} onChange={(event) => setDue(event.target.value)} />
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="Comma separated, e.g. design, billing"
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="primary-btn" type="submit">
          <Plus size={16} />
          Add task
        </button>
        <button className="ghost-btn" type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
