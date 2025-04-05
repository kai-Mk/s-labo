import type { ChangeEvent } from 'react';

/**
 * select要素の変更イベントから categoryId/projectId を抽出する処理
 */
export const parseCategoryOption = (e: ChangeEvent<HTMLSelectElement>) => {
  const option: HTMLOptionElement = e.target.options[e.target.selectedIndex];
  const categoryId = Number(option.getAttribute('data-category-id'));
  const projectId = option.hasAttribute('data-project-id')
    ? Number(option.getAttribute('data-project-id'))
    : null;

  return { categoryId, projectId };
};
