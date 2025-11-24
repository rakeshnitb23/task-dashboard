import TaskColumn from './TaskColumn';

function TaskBoard({ statuses, tasks, onMoveTask }) {
  return (
    <div className="task-board">
      {statuses.map((status) => (
        <TaskColumn
          key={status.id}
          status={status}
          tasks={tasks.filter((task) => task.status === status.id)}
          statuses={statuses}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
