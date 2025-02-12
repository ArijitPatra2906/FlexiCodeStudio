import { SignInButton, useUser } from "@clerk/nextjs";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { MessageSquare, User } from "lucide-react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Comments({ snippetId }: { snippetId: Id<"snippets"> }) {
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletinCommentId, setDeletingCommentId] = useState<string | null>(
    null
  );

  const comments = useQuery(api.snippets.getComments, { snippetId }) || [];
  const addComment = useMutation(api.snippets.addComment);
  const deleteComment = useMutation(api.snippets.deleteComment);

  const handleSubmitComment = async (content: string) => {
    setIsSubmitting(true);

    try {
      await addComment({ snippetId, content });
    } catch (error) {
      console.log("Error adding comment:", error);
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: Id<"snippetComments">) => {
    setDeletingCommentId(commentId);

    try {
      await deleteComment({ commentId });
    } catch (error) {
      console.log("Error deleting comment:", error);
      toast.error("Something went wrong");
    } finally {
      setDeletingCommentId(null);
    }
  };

  return (
    <div className="bg-[#121218] border border-[#ffffff0a] rounded-2xl overflow-hidden">
      <div className="px-6 sm:px-8 py-6 border-b border-[#ffffff0a]">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Discussion ({comments.length})
        </h2>
      </div>

      <div className="p-6 sm:p-8">
        {user ? (
          <CommentForm
            onSubmit={handleSubmitComment}
            isSubmitting={isSubmitting}
          />
        ) : (
          <div className="bg-[#0a0a0f] rounded-xl p-6 text-center mb-8 border border-[#ffffff0a] flex items-center justify-center flex-col">
            <p className="text-[#808086] mb-4">
              Sign in to join the discussion
            </p>
            <SignInButton mode="modal">
              <button
                className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <User className="w-4 h-4 transition-transform" />
                <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                  Sign In
                </span>
              </button>
            </SignInButton>
          </div>
        )}

        <div className="space-y-6">
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              onDelete={handleDeleteComment}
              isDeleting={deletinCommentId === comment._id}
              currentUserId={user?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Comments;
