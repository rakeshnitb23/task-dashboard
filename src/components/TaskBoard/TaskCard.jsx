import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Tag, User } from 'lucide-react';

function TaskCard({ task, statuses, onMoveTask }) {
  const currentIndex = statuses.findIndex((status) => status.id === task.status);
  const previous = currentIndex > 0 ? statuses[currentIndex - 1] : null;
  const next = currentIndex < statuses.length - 1 ? statuses[currentIndex + 1] : null;

  const formattedDate = task.due
    ? new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(
        new Date(task.due)
      )
    : 'No due';

  return (
    <article className="task-card">
      <div className="task-card__top">
        <span className={`priority ${task.priority}`}>{task.priority}</span>
        <span className="task-id">{task.id}</span>
      </div>

      <h4>{task.title}</h4>
      <p className="muted">{task.description}</p>

      <div className="meta">
        <span className="meta-item">
          <Calendar size={14} />
          {formattedDate}
        </span>
        <span className="meta-item">
          <User size={14} />
          {task.owner}
        </span>
      </div>

      {task.tags?.length ? (
        <div className="tags">
          {task.tags.map((tag) => (
            <span key={tag} className="pill subtle">
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="card-actions">
        <button
          type="button"
          className="ghost-btn"
          onClick={() => previous && onMoveTask(task.id, previous.id)}
          disabled={!previous}
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <button
          type="button"
          className="primary-btn ghost"
          onClick={() => next && onMoveTask(task.id, next.id)}
          disabled={!next}
        >
          {next ? (
            <>
              Forward
              <ArrowRight size={14} />
            </>
          ) : (
            <>
              Done
              <CheckCircle2 size={14} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
