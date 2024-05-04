"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { Block } from "@blocknote/core";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import "./block-editor.css";

type BlockEditorProps = {
  changeBlocks: (blocks: Block[]) => void;
};

export default function BlockEditor({ changeBlocks }: BlockEditorProps) {
  const editor = useCreateBlockNote({
    initialContent: [
      { type: "paragraph", content: "첫째 줄이 제목이 되고," },
      { type: "paragraph", content: "두번째 줄부터 내용이 됩니다." },
      { type: "paragraph", content: "각 블록이 하나의 연을 이루며," },
      {
        type: "paragraph",
        content: "각 연에서의 개행은 shift + enter를 눌러 실행합니다.",
      },
    ],
  });

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        changeBlocks(editor.document);
      }}
    />
  );
}
