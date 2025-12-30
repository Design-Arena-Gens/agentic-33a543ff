'use client'

import { useState } from 'react'

interface VideoData {
  primaryKeyword: string
  secondaryKeywords: string[]
  script: string
  videoPrompt: string
  thumbnailPrompt: string
  title: string
  description: string
  tags: string[]
  hashtags: string[]
  chapters?: string[]
}

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const generateVideo = async () => {
    setIsGenerating(true)
    setError(null)
    setVideoData(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Failed to generate video content')
      }

      const data = await response.json()
      setVideoData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Insurance Decoded
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Autonomous YouTube AI Agent
          </p>
          <p className="text-md text-gray-600">
            USA Insurance Education | Auto-Optimized for Search & CTR
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <button
            onClick={generateVideo}
            disabled={isGenerating}
            className={`w-full py-4 px-8 rounded-lg text-white font-bold text-lg transition-all ${
              isGenerating
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating Video Content...
              </span>
            ) : (
              'Generate New YouTube Video'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8">
            <strong className="font-bold">Error: </strong>
            <span>{error}</span>
          </div>
        )}

        {videoData && (
          <div className="space-y-6">
            {/* Keywords */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🎯</span> Keywords
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Primary: </span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                    {videoData.primaryKeyword}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Secondary: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {videoData.secondaryKeywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">📝</span> Title
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.title)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <p className="text-lg text-gray-800">{videoData.title}</p>
            </div>

            {/* Script */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">📜</span> Video Script
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.script)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
                {videoData.script}
              </div>
            </div>

            {/* AI Video Prompt */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">🎬</span> AI Video Prompt
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.videoPrompt)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
                {videoData.videoPrompt}
              </div>
            </div>

            {/* Thumbnail Prompt */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">🖼️</span> Thumbnail Prompt
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.thumbnailPrompt)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
                {videoData.thumbnailPrompt}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">📄</span> Description
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.description)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
                {videoData.description}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">🏷️</span> Tags
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.tags.join(', '))}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="flex flex-wrap gap-2">
                {videoData.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hashtags */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>
                  <span className="mr-2">#️⃣</span> Hashtags
                </span>
                <button
                  onClick={() => copyToClipboard(videoData.hashtags.join(' '))}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Copy
                </button>
              </h2>
              <div className="flex flex-wrap gap-2">
                {videoData.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Chapters */}
            {videoData.chapters && videoData.chapters.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                  <span>
                    <span className="mr-2">⏱️</span> Chapters
                  </span>
                  <button
                    onClick={() => copyToClipboard(videoData.chapters?.join('\n') || '')}
                    className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                  >
                    Copy
                  </button>
                </h2>
                <div className="space-y-2">
                  {videoData.chapters.map((chapter, idx) => (
                    <div key={idx} className="text-gray-800">
                      {chapter}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
