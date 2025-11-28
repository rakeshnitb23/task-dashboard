import TaskCard from './TaskCard';

function TaskColumn({ status, tasks, statuses, onMoveTask }) {
  return (
    <div className="task-column">
      <div className="column-header">
        <div className="status-pill" style={{ color: status.accent }}>
          <span className="dot" style={{ backgroundColor: status.accent }} />
          {status.name}
        </div>
        <span className="muted">{tasks.length} task{tasks.length === 1 ? '' : 's'}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 ? (
          <div className="empty-card">Nothing here yet</div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              statuses={statuses}
              onMoveTask={onMoveTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskColumn;
