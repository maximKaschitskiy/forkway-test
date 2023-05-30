"use client";
import { useEffect, useState } from "react";
import { PageType, Blocks } from "@/app/types";
import { Global } from "@emotion/react";
import { GlobalStyles } from "@/app/GlobalStyles";
import { pages } from "@/app/mock/mock";
import { sortPages, isParent, searchItems } from "@/app/utils/editObj";
import { useDragAndDrop } from "../app/hooks/useDragAndDrop";

import Main from "@/app/components/blocks/Main";
import MainWrapper from "@/app/components/blocks/MainWrapper";
import Search from "@/app/components/Search";
import ListWrapper from "@/app/components/blocks/ListWrapper";
import PagesWrapper from "@/app/components/blocks/PagesWrapper";
import Page from "../app/components/Page";

const Index = () => {
  const {
    listItems,
    draggedId,
    cursor,
    dragOverId,
    setDraggedId,
    handleUpdateList,
    setCursor,
    setDragOverId,
    setListItems,
  } = useDragAndDrop(pages);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search !== "") {
      setListItems(searchItems(listItems, search, "title"));
    } else {
      setListItems(pages);
    }
  }, [search]);

  const handleDrop = (e: Blocks, id: PageType["id"] | null) => {
    e.preventDefault();
    e.stopPropagation();
    handleUpdateList(draggedId, id);
    handleDragEnd();
  };

  const handleDragOver = (e: Blocks, id: PageType["id"] | null) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverId(id);
    if (draggedId === id) {
      e.dataTransfer.dropEffect = "move";
      setCursor("grabbing");
    } else if (isParent(listItems, draggedId, id)) {
      e.dataTransfer.dropEffect = "none";
      setCursor("not-allowed");
    } else {
      e.dataTransfer.dropEffect = "move";
      setCursor("auto");
    }
  };

  const handleDragStart = (id: PageType["id"]) => {
    setDraggedId(id);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
    setCursor("grab");
  };

  const buildFlat = (listItems: PageType[]) => (
    <>
      {listItems.map((page) => (
        <Page
          handleDragStart={(id) => handleDragStart(id)}
          handleDragEnd={() => handleDragEnd()}
          handleDrop={(e, id) => handleDrop(e, id)}
          handleDragOver={(e, id) => handleDragOver(e, id)}
          page={page}
          key={page.id}
          cursor={cursor}
          draggedId={draggedId}
          dragOverId={dragOverId}
          search={search}
        ></Page>
      ))}
    </>
  );

  const buildTree = (
    listItems: PageType[],
    parentId: PageType["parent_id"]
  ) => {
    const sortedList = sortPages(listItems, "parent_id");
    const children = sortedList.filter((page) => page.parent_id === parentId);

    if (children.length === 0) {
      return null;
    }

    return (
      <ListWrapper>
        {children.map((page) => (
          <Page
            handleDragStart={(id) => handleDragStart(id)}
            handleDragEnd={() => handleDragEnd()}
            handleDrop={(e, id) => handleDrop(e, id)}
            handleDragOver={(e, id) => handleDragOver(e, id)}
            page={page}
            key={page.id}
            cursor={cursor}
            draggedId={draggedId}
            dragOverId={dragOverId}
            search={search}
          >
            {buildTree(listItems, page.id)}
          </Page>
        ))}
      </ListWrapper>
    );
  };

  return (
    <Main>
      <Global styles={GlobalStyles} />
      <MainWrapper>
        <Search search={search} setSearch={(e) => setSearch(e)} />
        <PagesWrapper
          isDragOver={draggedId !== null && dragOverId === null}
          onDragOver={(e: any) => {
            handleDragOver(e, null);
          }}
          onDrop={(e: any) => {
            handleDrop(e, null);
          }}
        >
          {search !== '' ? buildFlat(listItems) : buildTree(listItems, null)}
        </PagesWrapper>
      </MainWrapper>
    </Main>
  );
}

export default Index;