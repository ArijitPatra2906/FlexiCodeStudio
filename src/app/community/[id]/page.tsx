"use client";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import SnippetLoadingSkeleton from "./_components/SnippetLoadingSkeleton";
import Header from "@/components/Header";
import { Clock, Code, MessageSquare, Share2, User } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import CopyButton from "./_components/CopyButton";
import Comments from "./_components/Comments";

function SnippetDetailPage() {
  const snippetId = useParams().id;
  const snippet = useQuery(api.snippets.getSnippetById, {
    snippetId: snippetId as Id<"snippets">,
  });
  const comments = useQuery(api.snippets.getComments, {
    snippetId: snippetId as Id<"snippets">,
  });

  const handleShare = () => {
    const url = `${window.location.origin}/community/${snippetId}`;
    const text = `Check out this snippet: \n\n${url}`; // Ensure newline before URL

    // Use Web Share API if available
    if (navigator.share) {
      navigator
        .share({
          text,
          url,
        })
        .catch((error) => console.error("Error sharing:", error));
      return;
    }

    // Encode the text properly
    const encodedText = encodeURIComponent(
      `Check out this snippet: \n\n${url}`
    );

    // Fallback Share Options
    const shareOptions = [
      {
        name: "WhatsApp",
        url: `https://wa.me/?text=${encodedText}`, // WhatsApp deep link with encoded text
      },
      {
        name: "Email",
        url: `mailto:?body=${encodedText}`,
      },
      {
        name: "Messages",
        url: `sms:?&body=${encodedText}`,
      },
    ];

    // Open WhatsApp first by default
    window.open(shareOptions[0].url, "_blank");
  };

  if (snippet === undefined) return <SnippetLoadingSkeleton />;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="bg-[#121218] border border-[#ffffff0a] rounded-2xl p-6 sm:p-8 mb-6 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-[#ffffff08] p-2.5">
                  <img
                    src={`/${snippet.language}.png`}
                    alt={`${snippet.language} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {snippet.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[#8b8b8d]">
                      <User className="w-4 h-4" />
                      <span>{snippet.userName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8b8b8d]">
                      <Clock className="w-4 h-4" />
                      <span>
                        {new Date(snippet._creationTime).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8b8b8d]">
                      <MessageSquare className="w-4 h-4" />
                      <span>{comments?.length} comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-[#ffffff08] text-[#808086] rounded-lg text-sm font-medium">
                  {snippet.language}
                </div>
                <button
                  onClick={handleShare}
                  className="group flex items-center rounded-lg  text-gray-400 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200"
                >
                  <Share2 className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-[#ffffff0a] bg-[#121218]">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#ffffff0a]">
              <div className="flex items-center gap-2 text-[#808086]">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Source Code</span>
              </div>
              <CopyButton code={snippet.code} />
            </div>
            <Editor
              height="600px"
              language={LANGUAGE_CONFIG[snippet.language].monacoLanguage}
              value={snippet.code}
              theme="vs-dark"
              beforeMount={defineMonacoThemes}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                readOnly: true,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16 },
                renderWhitespace: "selection",
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
              }}
            />
          </div>

          <Comments snippetId={snippet._id} />
        </div>
      </main>
    </div>
  );
}

export default SnippetDetailPage;
