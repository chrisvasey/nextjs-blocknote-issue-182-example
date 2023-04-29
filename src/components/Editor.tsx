'use client';
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

// Gets the previously stored editor contents.
const initialContent = '';

export default function Editor() {
  // Creates a new editor instance.
  const editor = useBlockNote({
    // If the editor contents were previously saved, restores them.
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    // Serializes and saves the editor contents to local storage.
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks)
    }
  });

  // Renders the editor instance.
  return <BlockNoteView editor={editor} />;
}
