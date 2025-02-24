export interface RoleData {
  role_id: number;
  role_name: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface TeamData {
  team_id: number;
  team_name: string;
  team_description: string | null;
  owner_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface UserData {
  user_id: number;
  family_name: string;
  given_name: string;
  user_name: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface TeamMemberData {
  team_member_id: number;
  user_id: number;
  team_id: number;
  role_id: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  team: TeamData;
  user: UserData;
  role: RoleData;
}
