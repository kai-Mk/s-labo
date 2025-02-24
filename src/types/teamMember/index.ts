export interface RoleData {
  role_id: number;
  role_name: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
}

export interface TeamData {
  team_id: number;
  team_name: string;
  team_description: string | null;
  owner_id: number;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
}

export interface UserData {
  user_id: number;
  family_name: string;
  given_name: string;
  user_name: string;
  email: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
}

export interface TeamMemberData {
  team_member_id: number;
  user_id: number;
  team_id: number;
  role_id: number;
  created_at: Date | string;
  updated_at: Date | string | null;
  deleted_at: Date | string | null;
  team: TeamData;
  user: UserData;
  role: RoleData;
}
