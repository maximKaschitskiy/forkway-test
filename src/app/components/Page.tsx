import { PagePropsType } from "../types";
import PageWrapper from "./blocks/PageWrapper";
import PageHead from "./blocks/PageHead";
import TabTitle from "./blocks/TabTitle";
import TabSubTitle from "./blocks/TabSubtitle";
import PageContent from "./blocks/PageContent";
import Grip from "./blocks/Grip";

const Page = ({
  page,
  children,
  handleDragStart,
  handleDragEnd,
  handleDrop,
  handleDragOver,
  cursor,
  draggedId,
  dragOverId,
  search
}: PagePropsType) => {

  return (
    <PageWrapper>
      <PageHead
        draggable={search === ''}
        onDragStart={() => handleDragStart(page.id)}
        onDragEnd={()=>{
          handleDragEnd();
        }}
        onDrop={(e) =>{
          handleDrop(e, page.id);
        }}
        onDragOver={(e)=>{handleDragOver(e, page.id)}}
        cursor={cursor}
        isDragged={draggedId !== null && draggedId === page.id}
        isDragOver={dragOverId  !== null && dragOverId === page.id}
      >
        <Grip src="/grip.svg" draggable={false}></Grip>
        <PageContent>
            <TabTitle draggable={false}>{page.title}</TabTitle>
            <TabSubTitle>{`id ${page.id}`}</TabSubTitle>
        </PageContent>
      </PageHead>
      {children}
    </PageWrapper>
  );
};

export default Page;
