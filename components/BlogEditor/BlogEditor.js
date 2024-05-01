import React, { useState, useEffect, useRef } from "react";
import "./editor.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";

export default function BlogEditor({ blogPosted }) {
  const [isEditorLoading, setIsEditorLoading] = useState(true);
  const isReady = useRef(false);
  const editorInstance = useRef(null);

  const [isPosting, setIsPosting] = useState(false);

  const configs = {
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      checklist: {
        class: CheckList,
        inlineToolbar: true,
      },

      delimiter: {
        class: Delimiter,
        inlineToolbar: true,
      },

      embed: {
        class: Embed,
        inlineToolbar: true,
      },
      image: {
        class: Image,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
      },
    },

    autofocus: true,
  };

  useEffect(() => {
    if (!isReady.current) {
      editorInstance.current = new EditorJS(configs);
      isReady.current = true;
    }
  }, []);

  useEffect(() => {
    if (blogPosted) {
      postBlog();
    }
  }, [blogPosted]);

  const postBlog = async () => {
    const data = await editorInstance.current.save();

    if (data.blocks.length === 0) {
      alert("Please write something before posting");
      return;
    }

    setIsPosting(true);

    try {
      // send to this server/api/post-blog
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      alert(result.message);
    } catch (err) {
      console.log(err);
      alert("Failed to post blog");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div id="editorjs" className="col-sm-8 blog-page"></div>
      </div>
    </div>
  );
}
