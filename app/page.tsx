"use client";

import { useState, useEffect } from "react";
import ResumeForm from "@/components/resume-form";
import ResumePreview from "@/components/resume-preview";
import Image from "next/image";
import nexisLogo from "@/public/nexis-logo.png";

export default function Home() {
  const [resumeData, setResumeData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (error) {
        console.error("Failed to load saved data:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleFormSubmit = (data: any) => {
    localStorage.setItem("resumeData", JSON.stringify(data));
    setResumeData(data);
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full">
        {!showPreview ? (
          <>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:px-8 z-10 shadow-sm">
              <div className="flex md:items-center gap-2 md:gap-4 flex-row-reverse md:flex-row justify-between">
                <Image
                  src={nexisLogo}
                  alt="Nexis-logo"
                  width={320}
                  height={80}
                  className="w-24 md:w-32"
                />
                <div>
                  <h1 className="text-md md:text-xl font-semibold text-gray-900">
                    Resume Builder
                  </h1>
                  <p className="text-gray-600 mt-0.5 text-sm md:text-inherit">
                    Create your professional resume
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-8">
              <ResumeForm
                initialData={resumeData}
                onSubmit={handleFormSubmit}
              />
            </div>
          </>
        ) : (
          <ResumePreview data={resumeData} onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
}
