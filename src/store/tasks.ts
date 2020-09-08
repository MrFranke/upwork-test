import { createEvent, createStore, guard } from 'effector'
import { Task } from "../types/task";

export const tasks$ = createStore<Task[]>([]);
export const completedTasks$ = createStore<Task[]>([]);
export const inProgressTasks$ = createStore<Task[]>([]);

export const addTask = createEvent<Task>()

const onCompletedTasks = guard(addTask, {
  filter: (task) => task.progress === 100
});

const onProgressTasks = guard(addTask, {
  filter: (task) => task.progress < 100
});

completedTasks$.on(onCompletedTasks, (tasks, task) => [...tasks, task]);
inProgressTasks$.on(onProgressTasks, (tasks, task) => [...tasks, task]);
tasks$.on(addTask, (tasks, task) => [...tasks, task]);
