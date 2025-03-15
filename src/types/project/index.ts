export interface ProjectData {
  project_id: number;
  project_name: string;
  project_description: string | null;
  team_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
