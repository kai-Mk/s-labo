import { apiClient } from '@/lib/apiClient';
import { type TeamMemberData } from '@/types/teamMember';

// サインインしているユーザーのチームメンバーデータを取得するAPIを呼び出す
export const fetchTeamMemberData = async (
  userId: string,
): Promise<TeamMemberData[]> => {
  const response = await apiClient.get<TeamMemberData[]>(
    `/api/team-member/${userId}`,
  );
  return response.data;
};
