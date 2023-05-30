type PageType = {
    id: number;
    title: string;
    parent_id: number | null;
  };

type PageHeadProps = {
  cursor: string;
  isDragged: boolean;
  isDragOver: boolean;
}

type PagesWrapper = {
  isDragOver: boolean;
}

type SearchProps = {
  search: string;
  setSearch: (e: string) => void;
}

type PagePropsType =  {
    page: PageType;
    key: PageType['id'];
    children?: React.ReactNode;
    handleDragStart: (id: PageType['id']) => void;
    handleDragEnd: () => void;
    handleDrop: (e: Blocks, id: PageType['id'] | PageType['parent_id']) => void;
    handleDragOver: (e: Blocks, id: PageType['id']) => void;
    draggedId: PageType['id'] | null;
    dragOverId: PageType['id'] | null;
    cursor: PageHeadProps['cursor'];
    search: string;
  };

type Blocks = React.DragEvent<HTMLDivElement | HTMLUListElement | HTMLLIElement>


export type {PageType, PagePropsType, Blocks, PageHeadProps, PagesWrapper, SearchProps};