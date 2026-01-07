"use client"

import type React from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function EducationStep({ data, setData, errors }: any) {
  const updateEducation = (field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }))
  }

  const handleIconUpload = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        updateEducation(field, event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gray-50">
        <h3 className="font-semibold text-lg mb-4">University Education</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">University Icon (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {data.education.universityIcon ? (
              <div className="space-y-3">
                <img
                  src={data.education.universityIcon}
                  alt="University icon"
                  className="w-16 h-16 rounded-lg mx-auto object-contain"
                />
                <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                  Change Icon
                  <input type="file" accept="image/*" onChange={(e) => handleIconUpload("universityIcon", e)} className="hidden" />
                </label>
              </div>
            ) : (
              <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                Upload Icon
                <input type="file" accept="image/*" onChange={(e) => handleIconUpload("universityIcon", e)} className="hidden" />
              </label>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">University Name *</label>
            <Input
              type="text"
              placeholder="e.g., NEXIS School of Business"
              value={data.education.university}
              onChange={(e) => updateEducation("university", e.target.value)}
              className={errors.university ? "border-red-500" : ""}
            />
            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Degree / Program *</label>
            <Input
              type="text"
              placeholder="e.g., UG in Business Management"
              value={data.education.degree}
              onChange={(e) => updateEducation("degree", e.target.value)}
              className={errors.degree ? "border-red-500" : ""}
            />
            {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Year *</label>
            <Input
              type="text"
              placeholder="e.g., 2024"
              value={data.education.startYear}
              onChange={(e) => updateEducation("startYear", e.target.value)}
              className={errors.startYear ? "border-red-500" : ""}
            />
            {errors.startYear && <p className="text-red-500 text-sm mt-1">{errors.startYear}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Year / Expected *</label>
            <Input
              type="text"
              placeholder="e.g., Present or 2026"
              value={data.education.endYear}
              onChange={(e) => updateEducation("endYear", e.target.value)}
              className={errors.endYear ? "border-red-500" : ""}
            />
            {errors.endYear && <p className="text-red-500 text-sm mt-1">{errors.endYear}</p>}
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gray-50">
        <h3 className="font-semibold text-lg mb-4">Class 12 Education</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">School Icon (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {data.education.class12Icon ? (
              <div className="space-y-3">
                <img
                  src={data.education.class12Icon}
                  alt="Class 12 icon"
                  className="w-16 h-16 rounded-lg mx-auto object-contain"
                />
                <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                  Change Icon
                  <input type="file" accept="image/*" onChange={(e) => handleIconUpload("class12Icon", e)} className="hidden" />
                </label>
              </div>
            ) : (
              <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                Upload Icon
                <input type="file" accept="image/*" onChange={(e) => handleIconUpload("class12Icon", e)} className="hidden" />
              </label>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
            <Input
              type="text"
              placeholder="e.g., Delhi Public School"
              value={data.education.class12School}
              onChange={(e) => updateEducation("class12School", e.target.value)}
              className={errors.class12School ? "border-red-500" : ""}
            />
            {errors.class12School && <p className="text-red-500 text-sm mt-1">{errors.class12School}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Board *</label>
            <Input
              type="text"
              placeholder="e.g., CBSE / ISC / State Board"
              value={data.education.class12Board}
              onChange={(e) => updateEducation("class12Board", e.target.value)}
              className={errors.class12Board ? "border-red-500" : ""}
            />
            {errors.class12Board && <p className="text-red-500 text-sm mt-1">{errors.class12Board}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Marks / Grade *</label>
            <Input
              type="text"
              placeholder="e.g., 90% or A+"
              value={data.education.class12Marks}
              onChange={(e) => updateEducation("class12Marks", e.target.value)}
              className={errors.class12Marks ? "border-red-500" : ""}
            />
            {errors.class12Marks && <p className="text-red-500 text-sm mt-1">{errors.class12Marks}</p>}
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gray-50">
        <h3 className="font-semibold text-lg mb-4">Class 10 Education</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">School Icon (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {data.education.class10Icon ? (
              <div className="space-y-3">
                <img
                  src={data.education.class10Icon}
                  alt="Class 10 icon"
                  className="w-16 h-16 rounded-lg mx-auto object-contain"
                />
                <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                  Change Icon
                  <input type="file" accept="image/*" onChange={(e) => handleIconUpload("class10Icon", e)} className="hidden" />
                </label>
              </div>
            ) : (
              <label className="inline-block px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                Upload Icon
                <input type="file" accept="image/*" onChange={(e) => handleIconUpload("class10Icon", e)} className="hidden" />
              </label>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
            <Input
              type="text"
              placeholder="e.g., Delhi Public School"
              value={data.education.class10School}
              onChange={(e) => updateEducation("class10School", e.target.value)}
              className={errors.class10School ? "border-red-500" : ""}
            />
            {errors.class10School && <p className="text-red-500 text-sm mt-1">{errors.class10School}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Board *</label>
            <Input
              type="text"
              placeholder="e.g., CBSE / ICSE / State Board"
              value={data.education.class10Board}
              onChange={(e) => updateEducation("class10Board", e.target.value)}
              className={errors.class10Board ? "border-red-500" : ""}
            />
            {errors.class10Board && <p className="text-red-500 text-sm mt-1">{errors.class10Board}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Marks / Grade *</label>
            <Input
              type="text"
              placeholder="e.g., 94% or A+"
              value={data.education.class10Marks}
              onChange={(e) => updateEducation("class10Marks", e.target.value)}
              className={errors.class10Marks ? "border-red-500" : ""}
            />
            {errors.class10Marks && <p className="text-red-500 text-sm mt-1">{errors.class10Marks}</p>}
          </div>
        </div>
      </Card>
    </div>
  )
}
