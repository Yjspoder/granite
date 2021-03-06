import { func } from "prop-types";

export function tasks_path() {
  return "/tasks";
}

export function new_task_path() {
  return "/tasks/new";
}

export function task_path(id) {
  return `/tasks/${id}`;
}

export function edit_task_path(id) {
  return `/tasks/${id}/edit`;
}

export function users_path() {
  return "/users";
}

export function create_session_path() {
  return "/session";
}

export function login_path() {
  return "/session/new";
}

export function logout_path() {
  return "/logout";
}
