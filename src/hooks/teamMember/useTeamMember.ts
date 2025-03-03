import type { TeamMemberData } from '@/types/teamMember';
import { apiClient } from '@/lib/apiClient';
import useSWR from 'swr';

// API経由でチームメンバーを取得するカスタムフック
export const useTeamMember = (userId: string | null) => {
  const fetcher = async (url: string) => {
    const response = await apiClient.get<TeamMemberData[]>(url);
    return response.data;
  };

  const { data } = useSWR<TeamMemberData[]>(
    `/api/team-member/${userId}`,
    fetcher,
  );
  return data;
};
