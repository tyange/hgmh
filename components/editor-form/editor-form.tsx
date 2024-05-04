"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Block } from "@blocknote/core";

import { savePoem } from "@/lib/actions";

const BlockEditor = dynamic(
  () => import("@/components/editor-form/block-editor/block-editor"),
  {
    ssr: false,
  },
);

export default function EditorForm() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const changeBlocks = (blocks: Block[]) => {
    setBlocks(blocks);
  };

  const loggingBlocks = async () => {
    await savePoem(blocks);
  };

  return (
    <>
      <button onClick={loggingBlocks}>save</button>
      <BlockEditor changeBlocks={changeBlocks} />
    </>
  );
}
