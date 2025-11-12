"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2 } from "lucide-react"

export default function WorkExperienceStep({ data, setData, errors }: any) {
  const updateWorkExperience = (index: number, field: string, value: any) => {
    const updated = [...data.workExperience]
    updated[index] = { ...updated[index], [field]: value }
    setData((prev: any) => ({ ...prev, workExperience: updated }))
  }

  const updateHighlight = (index: number, highlightIndex: number, value: string) => {
    const updated = [...data.workExperience]
    updated[index].highlights[highlightIndex] = value
    setData((prev: any) => ({ ...prev, workExperience: updated }))
  }

  const addExperience = () => {
    setData((prev: any) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          id: Date.now(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
          highlights: ["", "", ""],
        },
      ],
    }))
  }

  const removeExperience = (index: number) => {
    if (data.workExperience.length > 1) {
      const updated = data.workExperience.filter((_: any, i: number) => i !== index)
      setData((prev: any) => ({ ...prev, workExperience: updated }))
    }
  }

  return (
    <div className="space-y-6">
      {data.workExperience.map((exp: any, idx: number) => (
        <Card key={exp.id || idx} className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Experience {idx + 1}</h3>
            <Button
              onClick={() => removeExperience(idx)}
              variant="ghost"
              size="sm"
              disabled={data.workExperience.length === 1}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <Input
                type="text"
                placeholder="e.g., Pahadi Maa-ki-ting"
                value={exp.company}
                onChange={(e) => updateWorkExperience(idx, "company", e.target.value)}
                className={errors[`company-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`company-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`company-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role / Title *</label>
              <Input
                type="text"
                placeholder="e.g., Head of Operations"
                value={exp.role}
                onChange={(e) => updateWorkExperience(idx, "role", e.target.value)}
                className={errors[`role-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`role-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`role-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
              <Input
                type="text"
                placeholder="Jan 2025"
                value={exp.startDate}
                onChange={(e) => updateWorkExperience(idx, "startDate", e.target.value)}
                className={errors[`startDate-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`startDate-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`startDate-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
              <Input
                type="text"
                placeholder="Present or Dec 2024"
                value={exp.endDate}
                onChange={(e) => updateWorkExperience(idx, "endDate", e.target.value)}
                className={errors[`endDate-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`endDate-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`endDate-${idx}`]}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <Textarea
              placeholder="Describe your main role and responsibilities"
              value={exp.description}
              onChange={(e) => updateWorkExperience(idx, "description", e.target.value)}
              className={`min-h-20 ${errors[`description-${idx}`] ? "border-red-500" : ""}`}
            />
            {errors[`description-${idx}`] && (
              <p className="text-red-500 text-sm mt-1">{errors[`description-${idx}`]}</p>
            )}
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Key Achievement Bullets (3 required) *</label>
            {exp.highlights.map((highlight: string, hidx: number) => (
              <div key={hidx}>
                <Input
                  type="text"
                  placeholder={`Bullet ${hidx + 1}: e.g., Manage day-to-day operations...`}
                  value={highlight}
                  onChange={(e) => updateHighlight(idx, hidx, e.target.value)}
                  className={errors[`highlight-${idx}-${hidx}`] ? "border-red-500" : ""}
                />
                {errors[`highlight-${idx}-${hidx}`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`highlight-${idx}-${hidx}`]}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Button onClick={addExperience} variant="outline" className="w-full bg-transparent">
        + Add Another Experience
      </Button>
    </div>
  )
}
