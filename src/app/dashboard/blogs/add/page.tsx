"use client";
import addBlog from "@/app/api/blogs/add";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { queryClient } from "@/layout/Layout";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import { toast } from "react-toastify";

export default function AddBlogs() {
  const router = useRouter();
  const { handleSubmit, register, control } = useForm();
  const { quill, quillRef } = useQuill();
  console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  const onSubmit = (data: any) => {
    console.log(data);
    // if (quill) {
    //   console.log(quill.getText()); // Get text only
    //   console.log(quill.getContents()); // Get delta contents
    //   console.log(quill.root.innerHTML); // Get innerHTML using quill
    //   console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
    // }

    mutate(
      {
        ...data,
        date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        content: quillRef.current.firstChild.innerHTML,
      },
      {
        onSuccess() {
          router.push("/dashboard/blogs");
          queryClient.invalidateQueries({ queryKey: ["/blogs"] });
        },
      }
    );
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addBlog,
    mutationKey: ["/add/blog"],
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div>
      <h1>Add Blog</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <TextInput label="Title" name="title" register={register} />
        <TextInput label="Cover Image" name="cover_image" register={register} />
        <div style={{ width: "100%", marginTop: 10, marginBottom: 20 }}>
          <label>
            <b>Content</b>
          </label>
          <div>
            <div ref={quillRef} style={{ width: "100%", height: 300 }} />
          </div>
        </div>
      </form>
      <div style={{}}>
        <Button loading={isPending} onClick={handleSubmit(onSubmit)}>
          Publish Blog
        </Button>
      </div>
    </div>
  );
}
