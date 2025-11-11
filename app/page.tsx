"use client"

import { useState, useEffect } from "react"
import ResumeForm from "@/components/resume-form"
import ResumePreview from "@/components/resume-preview"

export default function Home() {
  const [resumeData, setResumeData] = useState<any>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData))
      } catch (error) {
        console.error("Failed to load saved data:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const handleFormSubmit = (data: any) => {
    localStorage.setItem("resumeData", JSON.stringify(data))
    setResumeData(data)
    setShowPreview(true)
  }

  const handleEdit = () => {
    setShowPreview(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full">
        {!showPreview ? (
          <>
            <div className="sticky top-0 bg-white border-b border-gray-200 py-4 px-8 z-10 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
              <p className="text-gray-600 mt-1">Create your professional resume</p>
            </div>
            <div className="p-8">
              <ResumeForm initialData={resumeData} onSubmit={handleFormSubmit} />
            </div>
          </>
        ) : (
          <ResumePreview data={resumeData} onEdit={handleEdit} />
        )}
      </div>
    </div>
  )
}
