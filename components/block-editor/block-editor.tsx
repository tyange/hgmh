"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import "./block-editor.css";

export default function BlockEditor(props: {}) {
  const editor = useCreateBlockNote();

  return <BlockNoteView editor={editor} />;
}
