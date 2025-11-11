"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LeadershipStep({ data, setData, errors }: any) {
  const updateLeadership = (index: number, field: string, value: any) => {
    const updated = [...data.leadership]
    updated[index] = { ...updated[index], [field]: value }
    setData((prev: any) => ({ ...prev, leadership: updated }))
  }

  const addLeadership = () => {
    setData((prev: any) => ({
      ...prev,
      leadership: [
        ...prev.leadership,
        {
          id: Date.now(),
          position: "",
          organization: "",
          duration: "",
          description: "",
        },
      ],
    }))
  }

  return (
    <div className="space-y-6">
      {data.leadership.map((lead: any, idx: number) => (
        <Card key={lead.id || idx} className="p-6 bg-gray-50">
          <h3 className="font-semibold text-lg mb-4">Position {idx + 1}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position Title *</label>
              <Input
                type="text"
                placeholder="e.g., President, Student Council Member"
                value={lead.position}
                onChange={(e) => updateLeadership(idx, "position", e.target.value)}
                className={errors[`position-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`position-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`position-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Organization / Club Name *</label>
              <Input
                type="text"
                placeholder="e.g., Nature Club, Student Council"
                value={lead.organization}
                onChange={(e) => updateLeadership(idx, "organization", e.target.value)}
                className={errors[`organization-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`organization-${idx}`] && (
                <p className="text-red-500 text-sm mt-1">{errors[`organization-${idx}`]}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
              <Input
                type="text"
                placeholder="e.g., 2024 — 2025"
                value={lead.duration}
                onChange={(e) => updateLeadership(idx, "duration", e.target.value)}
                className={errors[`duration-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`duration-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`duration-${idx}`]}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Initiatives / Impact Description *</label>
            <Textarea
              placeholder="e.g., Led sustainability campaigns including waste segregation drives and plantation programs, reached 400+ students"
              value={lead.description}
              onChange={(e) => updateLeadership(idx, "description", e.target.value)}
              className={`min-h-24 ${errors[`description-${idx}`] ? "border-red-500" : ""}`}
            />
            {errors[`description-${idx}`] && (
              <p className="text-red-500 text-sm mt-1">{errors[`description-${idx}`]}</p>
            )}
          </div>
        </Card>
      ))}

      <Button onClick={addLeadership} variant="outline" className="w-full bg-transparent">
        + Add Another Position
      </Button>
    </div>
  )
}
