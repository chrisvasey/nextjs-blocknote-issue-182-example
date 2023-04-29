'use client';
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

// Gets the previously stored editor contents.
const initialContent: string | null = localStorage.getItem("editorContent");

export default function Editor() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    // If the editor contents were previously saved, restores them.
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    // Serializes and saves the editor contents to local storage.
    onEditorContentChange: (editor) => {
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks)
      );
    }
  });

  // Renders the editor instance.
  return <BlockNoteView editor={editor} />;
}
