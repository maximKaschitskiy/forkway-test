import { useState } from "react"
import { PageType } from '../types';
import { editCollection, isParent } from '../utils/editObj';

export const useDragAndDrop = (initialState: PageType[]) => {

    const [draggedId, setDraggedId] = useState<PageType['id'] | null>(null);
    const [dragOverId, setDragOverId] = useState<PageType['id'] | null>(null);
    const [listItems, setListItems] = useState<PageType[]>(initialState);
    const [cursor, setCursor] = useState<string>("grab");

    const handleUpdateList = (id: PageType['id'] | null, newId: PageType['id'] | PageType['parent_id']) => {
      if (id !== newId) {
        if (newId === null) {
          setListItems((prev) => {
            return editCollection(prev, id, 'parent_id', newId);
          });
        }
        if (isParent(listItems, id, newId)) {
            return; 
          };
          setListItems((prev) => {
            return editCollection(prev, id, 'parent_id', newId);
          });
      }
    }

    return {
        listItems,
        draggedId,
        dragOverId,
        cursor,
        setDraggedId,
        handleUpdateList,
        setCursor,
        setDragOverId,
        setListItems
    }
}