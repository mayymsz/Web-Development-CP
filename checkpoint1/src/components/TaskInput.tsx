import { useState } from 'react';

type TaskInputProps = {
  onAddTask: (task: string) => void;
};

function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        className="border p-2 flex-1"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar
      </button>
    </form>
  );
}

export default TaskInput;
