import { useEffect, useState } from 'react';
import { fetchTeamMemberData } from '@/services/teamMember/teamMemberService';
import { type TeamMemberData } from '@/types/teamMember';

// サインインしているユーザーのチームメンバーデータを取得するカスタムフック
export const useTeamMemberData = (userId?: string) => {
  const [data, setData] = useState<TeamMemberData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const teamMemberData: TeamMemberData[] =
          await fetchTeamMemberData(userId);
        setData(teamMemberData);
      } catch (error) {
        setError('データの取得に失敗しました');
        console.error('データの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [userId]);

  return { data, isLoading, error };
};
