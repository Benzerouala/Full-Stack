function TaskItem({ texte, fait }) {
  return (
    <li className={fait ? "tache tache-fait" : "tache"}>
      <span>{texte}</span>
    </li>
  );
}

export default TaskItem;