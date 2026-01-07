"use client"

import type React from "react"
import { Input } from "@/components/ui/input"

export default function PersonalInfoStep({ data, setData, errors }: any) {
  const updatePersonalInfo = (field: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        updatePersonalInfo("photo", event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <Input
            type="text"
            placeholder="e.g., Krish Agarwal"
            value={data.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <Input
            type="email"
            placeholder="your.email@gmail.com"
            value={data.personalInfo.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <Input
            type="tel"
            placeholder="9064621789"
            value={data.personalInfo.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile URL *</label>
          <Input
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            value={data.personalInfo.linkedinUrl}
            onChange={(e) => updatePersonalInfo("linkedinUrl", e.target.value)}
            className={errors.linkedinUrl ? "border-red-500" : ""}
          />
          {errors.linkedinUrl && <p className="text-red-500 text-sm mt-1">{errors.linkedinUrl}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Headline *</label>
        <Input
          type="text"
          placeholder="e.g., UG in Business Management — NEXIS School of Business"
          value={data.personalInfo.education}
          onChange={(e) => updatePersonalInfo("education", e.target.value)}
          className={errors.education ? "border-red-500" : ""}
        />
        {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Your Professional Photo *</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {data.personalInfo.photo ? (
            <div className="space-y-4">
              <img
                src={data.personalInfo.photo || "/placeholder.svg"}
                alt="Profile"
                className="w-32 h-32 rounded-lg mx-auto object-cover"
              />
              <label className="inline-block px-4 py-2 text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                Change Photo
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
            </div>
          ) : (
            <label className="inline-block px-4 py-2 text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
              Upload Photo
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
          )}
        </div>
        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
      </div>
    </div>
  )
}
