import TaskItem from "./TaskItem";

function TaskList({ taches }) {
  if (taches.length === 0) {
    return <p>Aucune tâche à afficher.</p>;
  }

  return (
    <ul>
      {taches.map(t => (
        <TaskItem key={t.id} texte={t.texte} fait={t.fait} />
      ))}
    </ul>
  );
}

export default TaskList;