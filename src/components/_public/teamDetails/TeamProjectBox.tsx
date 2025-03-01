'use client';

import type { TeamMemberData } from '@/types/teamMember';
import type { AxiosResponse } from 'axios';
import React from 'react';
import { usePathname } from 'next/navigation';
import { apiClient } from '@/lib/apiClient';
import useSWR from 'swr';
import AddTeamButton from './AddTeamButton';
import styles from './teamDetails.module.scss';

interface TeamProjectBoxProps {
  teamMemberData: TeamMemberData[];
  children: React.ReactNode;
  userId: string | null;
}

const TeamProjectBox = ({
  teamMemberData,
  children,
  userId,
}: TeamProjectBoxProps) => {
  const pathname = usePathname();

  const fetcher = async (url: string): Promise<TeamMemberData[]> => {
    const response: AxiosResponse<TeamMemberData[]> = await apiClient.get(url);
    return response.data;
  };

  const { data, error }: { data: TeamMemberData[]; error: string } = useSWR<
    TeamMemberData[]
  >(`/api/team-member/${userId}`, fetcher);
  return (
    <div className={styles.team_project_box}>
      {data.length === 0 && pathname === '/' ? <AddTeamButton /> : children}
    </div>
  );
};

export default TeamProjectBox;
