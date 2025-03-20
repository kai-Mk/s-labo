export interface TaskCategory {
  task_category_id: number;
  task_category_name: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
}

export interface Project {
  project_id: number;
  project_name: string;
  project_description: string | null;
  team_id: number;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
}

export interface Todo {
  todo_id: number;
  todo_description: string;
  task_category_id: number;
  project_id: number | null;
  todo_checked: boolean;
  team_member_id: number;
  todo_date: Date | string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
  task_category: TaskCategory;
  project: Project | null;
}
