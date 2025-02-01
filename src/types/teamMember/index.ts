export interface TeamMemberData {
  team_member_id: number;
  user_id: number;
  team_id: number;
  role_id: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}
