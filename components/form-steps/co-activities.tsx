"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function CoActivitiesStep({ data, setData, errors }: any) {
  const updateActivity = (index: number, field: string, value: string) => {
    const updated = [...data.coActivities]
    updated[index] = { ...updated[index], [field]: value }
    setData((prev: any) => ({
      ...prev,
      coActivities: updated,
    }))
  }

  return (
    <div className="space-y-6">
      {data.coActivities.map((activity: any, idx: number) => (
        <Card key={activity.id || idx} className="p-6 bg-gray-50">
          <h3 className="font-semibold text-lg mb-4">Activity {idx + 1}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity / Competition Name *</label>
              <Input
                type="text"
                placeholder="e.g., Debate Competition, Case Competition Finalist"
                value={activity.name}
                onChange={(e) => updateActivity(idx, "name", e.target.value)}
                className={errors[`actName-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`actName-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`actName-${idx}`]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
              <Input
                type="text"
                placeholder="e.g., Inter-School, National, College-level"
                value={activity.level}
                onChange={(e) => updateActivity(idx, "level", e.target.value)}
                className={errors[`actLevel-${idx}`] ? "border-red-500" : ""}
              />
              {errors[`actLevel-${idx}`] && <p className="text-red-500 text-sm mt-1">{errors[`actLevel-${idx}`]}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Achievement / Outcome *</label>
            <Textarea
              placeholder="e.g., Ranked top 5 out of 50+ teams. Recognized for clarity and stage confidence."
              value={activity.achievement}
              onChange={(e) => updateActivity(idx, "achievement", e.target.value)}
              className={`min-h-24 ${errors[`actAchievement-${idx}`] ? "border-red-500" : ""}`}
            />
            {errors[`actAchievement-${idx}`] && (
              <p className="text-red-500 text-sm mt-1">{errors[`actAchievement-${idx}`]}</p>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
