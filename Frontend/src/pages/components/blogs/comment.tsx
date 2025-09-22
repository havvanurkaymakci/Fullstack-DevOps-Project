"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // yolunu projene göre uyarlamalısın
import { useParams } from "next/navigation";

type CommentProps = {
  postId: number;
};

const Comment = ({ postId }: CommentProps) => {
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { authTokens, user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!comment.trim()) {
      setErrorMessage("Yorum boş bırakılamaz.");
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/blog/posts/${postId}/comments/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens?.access}`,
        },
        body: JSON.stringify({ content: comment }),
      });

      if (response.ok) {
        setSuccessMessage("Yorumunuz başarıyla gönderildi.");
        setComment("");
      } else {
        const data = await response.json();
        setErrorMessage(data?.detail || "Bir hata oluştu.");
      }
    } catch (error) {
      setErrorMessage("Yorum gönderilirken bir hata oluştu.");
      console.error(error);
    }
  };

  return (
    <div className="xl:max-w-[1350px] mx-auto px-3 py-10">
      <div className="bg-clr_body p-6 rounded-lg shadow-md">
        <h3 className="text-white text-2xl font-semibold mb-4">Yorum Yap</h3>

        {successMessage && <p className="text-green-400 mb-3">{successMessage}</p>}
        {errorMessage && <p className="text-red-400 mb-3">{errorMessage}</p>}

        {user ? (
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-4 rounded-md text-clr_subtitle bg-[#1e1e1e] border border-clr_cusborder resize-none mb-4"
              rows={5}
              placeholder="Yorumunuzu buraya yazın..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-clr_base text-white rounded-md font-medium hover:bg-lime-500 duration-300"
            >
              Gönder
            </button>
          </form>
        ) : (
          <p className="text-clr_pra">Yorum yapmak için giriş yapmalısınız.</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
