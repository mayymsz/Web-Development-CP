type TaskListProps = {
  tasks: string[];
};

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="p-4">
      {tasks.map((task, index) => (
        <li key={index} className="border-b py-2">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

