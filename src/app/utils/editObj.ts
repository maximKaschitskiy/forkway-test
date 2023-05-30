import { PageType } from "../types";
const editCollection = (
  pages: PageType[],
  id: PageType["id"] | null,
  key: keyof PageType,
  value: PageType["id"] | PageType["parent_id"]
): PageType[] => {
  return pages.map((page) => {
    if (page.id === id) {
      return {
        ...page,
        [key]: value,
      };
    }
    return page;
  });
};

const sortPages = (pages: PageType[], key: keyof PageType): PageType[] => {
  return pages.sort((a, b) => {
    const valueA: any = a[key];
    const valueB: any = b[key];

    if (valueA === null && valueB !== null) {
      return -1;
    }
    if (valueA !== null && valueB === null) {
      return 1;
    }
    if (valueA === valueB) {
      return 0;
    }

    if (typeof valueA === "number" && typeof valueB === "number") {
      return valueA - valueB;
    }

    return 0;
  });
};

const isParent = (
  pages: PageType[],
  firstId: PageType["id"] | null,
  secondId: PageType["id"] | null
): boolean => {
  const secondObject = pages.find((page) => page.id === secondId);
  if (!secondObject) {
    return false;
  }

  if (secondObject.parent_id === firstId) {
    return true;
  }

  const parentObject = pages.find((page) => page.id === secondObject.parent_id);
  if (!parentObject) {
    return false;
  }

  return isParent(pages, firstId, parentObject.id);
};

const searchItems = (
  items: PageType[],
  keyword: string,
  key: keyof PageType
): PageType[] => {
  const filteredItems: PageType[] = items.filter((item) => {
    const itemValue = String(item[key]).toLowerCase();
    const searchKeyword = keyword.toLowerCase();
    return itemValue.includes(searchKeyword);
  });

  return filteredItems;
};

export { editCollection, sortPages, isParent, searchItems };
