"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2 } from "lucide-react"

export default function ProjectsStep({ data, setData, errors }: any) {
  const updateProject = (index: number, field: string, value: any) => {
    const updated = [...data.projects]
    updated[index] = { ...updated[index], [field]: value }
    setData((prev: any) => ({ ...prev, projects: updated }))
  }

  const updateHighlight = (index: number, highlightIndex: number, value: string) => {
    const updated = [...data.projects]
    updated[index].highlights[highlightIndex] = value
    setData((prev: any) => ({ ...prev, projects: updated }))
  }

  const addProject = () => {
    setData((prev: any) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now(),
          name: "",
          duration: "",
          objective: "",
          highlights: ["", ""],
        },
      ],
    }))
  }

  const removeProject = (index: number) => {
    if (data.projects.length > 1) {
      const updated = data.projects.filter((_: any, i: number) => i !== index)
      setData((prev: any) => ({ ...prev, projects: updated }))
    }
  }

  return (
    <div className="space-y-6">
      {data.projects.map((proj: any, idx: number) => (
        <Card key={proj.id || idx} className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Project {idx + 1}</h3>
            <Button
              onClick={() => removeProject(idx)}
              variant="ghost"
              size="sm"
              disabled={data.projects.length === 1}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
              <Input
                type="text"
                placeholder="e.g., Shipsukoon (Dropshipping)"
                value={proj.name}
                onChange={(e) => updateProject(idx, "name", e.target.value)}
                className={errors[`projName-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`projName-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`projName-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration / Semester *</label>
              <Input
                type="text"
                placeholder="e.g., Semester 1, 2024"
                value={proj.duration}
                onChange={(e) => updateProject(idx, "duration", e.target.value)}
                className={errors[`projDuration-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`projDuration-${idx}`] && (
                <p className="text-red-500 text-sm mt-1">{errors[`projDuration-${idx}`]}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objective / What was the project about? *
            </label>
            <Textarea
              placeholder="e.g., Built an e-commerce brand specialising in wireless chargers..."
              value={proj.objective}
              onChange={(e) => updateProject(idx, "objective", e.target.value)}
              className={`min-h-20 ${errors[`projObjective-${idx}`] ? "border-red-500" : ""}`}
            />
            {errors[`projObjective-${idx}`] && (
              <p className="text-red-500 text-sm mt-1">{errors[`projObjective-${idx}`]}</p>
            )}
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Key Highlights (2 required) *</label>
            {proj.highlights.map((highlight: string, hidx: number) => (
              <div key={hidx}>
                <Input
                  type="text"
                  placeholder={`Highlight ${hidx + 1}: e.g., Achieved ₹20,000 sales in 3 weeks`}
                  value={highlight}
                  onChange={(e) => updateHighlight(idx, hidx, e.target.value)}
                  className={errors[`projHighlight-${idx}-${hidx}`] ? "border-red-500" : ""}
                />
                {errors[`projHighlight-${idx}-${hidx}`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`projHighlight-${idx}-${hidx}`]}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Button onClick={addProject} variant="outline" className="w-full bg-transparent">
        + Add Another Project
      </Button>
    </div>
  )
}
