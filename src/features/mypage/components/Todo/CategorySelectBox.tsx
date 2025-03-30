import type { ProjectData } from '@/types/project';
import type { TaskCategoryData } from '@/types/taskCategory';
import type { ChangeEvent } from 'react';
import React from 'react';
import styles from '@/app/(public)/team/[teamId]/mypage/mypage.module.scss';

interface CategorySelectBoxProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  taskCategories: TaskCategoryData[];
  projects: ProjectData[];
}

const CategorySelectBox = ({
  onChange,
  taskCategories,
  projects,
}: CategorySelectBoxProps) => {
  return (
    <select
      id="category"
      className={styles.todo_select_category}
      onChange={onChange}
    >
      {/* optionのバリューはカテゴリーIDを指定 */}
      {taskCategories &&
        taskCategories.length !== 0 &&
        taskCategories.map((taskItem) =>
          // タスクが「プロジェクト」の場合サブフィールドとしてプロジェクトを選択
          taskItem.task_category_name === 'プロジェクト' ? (
            <optgroup
              key={taskItem.task_category_id}
              label={taskItem.task_category_name}
            >
              {/* プロジェクトの配列をmap関数で繰り返す */}
              {projects && projects.length !== 0
                ? projects.map((projectItem) => (
                    <option
                      key={projectItem.project_id}
                      value={projectItem.project_name}
                      data-category-id={taskItem.task_category_id}
                      data-project-id={projectItem.project_id}
                    >
                      {projectItem.project_name}
                    </option>
                  ))
                : null}
            </optgroup>
          ) : (
            <option
              key={taskItem.task_category_id}
              value={taskItem.task_category_name}
              data-category-id={taskItem.task_category_id}
            >
              {taskItem.task_category_name}
            </option>
          ),
        )}
    </select>
  );
};

export default CategorySelectBox;
