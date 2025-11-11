"use client"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function EducationStep({ data, setData, errors }: any) {
  const updateEducation = (field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }))
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gray-50">
        <h3 className="font-semibold text-lg mb-4">University Education</h3>

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
        <h3 className="font-semibold text-lg mb-4">Secondary Education</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">High School Name *</label>
            <Input
              type="text"
              placeholder="e.g., Delhi Public School (CBSE)"
              value={data.education.highSchool}
              onChange={(e) => updateEducation("highSchool", e.target.value)}
              className={errors.highSchool ? "border-red-500" : ""}
            />
            {errors.highSchool && <p className="text-red-500 text-sm mt-1">{errors.highSchool}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class 12 Marks / Grade *</label>
            <Input
              type="text"
              placeholder="e.g., 90% or A+"
              value={data.education.class12Marks}
              onChange={(e) => updateEducation("class12Marks", e.target.value)}
              className={errors.class12Marks ? "border-red-500" : ""}
            />
            {errors.class12Marks && <p className="text-red-500 text-sm mt-1">{errors.class12Marks}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class 10 Marks / Grade *</label>
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
