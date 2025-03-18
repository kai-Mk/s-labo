import { getTeamMembersById } from '@/services/teamMember/getTeamMembersById';
import { getCurrentUser } from './auth/getCurrentUser';

// 現在ログインしているユーザーのチームの情報を取得。マイページで使用
export const currentTeamMember = async (teamId: number) => {
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser.id;
  const teamMembersByUserId = await getTeamMembersById(currentUserId);
  const currentTeamMember = teamMembersByUserId.find(
    (item) => item.team_id === teamId,
  );

  return currentTeamMember;
};
