"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CoactivitiesStep({ data, setData }: any) {
  const handleAddActivity = () => {
    setData({
      ...data,
      coactivities: [...data.coactivities, { id: Date.now(), name: "", level: "", achievement: "" }],
    })
  }

  const handleUpdateActivity = (id: number, field: string, value: string) => {
    setData({
      ...data,
      coactivities: data.coactivities.map((act: any) => (act.id === id ? { ...act, [field]: value } : act)),
    })
  }

  const handleRemoveActivity = (id: number) => {
    setData({
      ...data,
      coactivities: data.coactivities.filter((act: any) => act.id !== id),
    })
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-600">Share your achievements in competitions, events, and co-curricular activities.</p>

      {data.coactivities.map((act: any, index: number) => (
        <Card key={act.id} className="p-6 bg-slate-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900">Activity {index + 1}</h3>
            <Button
              onClick={() => handleRemoveActivity(act.id)}
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700"
            >
              Remove
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Activity / Competition / Event Name *
              </label>
              <Input
                placeholder="e.g., Debate Competition, Case Study Contest, Sports Event"
                value={act.name || ""}
                onChange={(e) => handleUpdateActivity(act.id, "name", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Level *</label>
              <Input
                placeholder="e.g., College, Inter-School, National, International"
                value={act.level || ""}
                onChange={(e) => handleUpdateActivity(act.id, "level", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Achievement or Learning Outcome *
              </label>
              <Textarea
                placeholder="e.g., Finalist; recognized for clarity and stage presence. Top 5 out of 50+ teams."
                value={act.achievement || ""}
                onChange={(e) => handleUpdateActivity(act.id, "achievement", e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </Card>
      ))}

      <Button onClick={handleAddActivity} variant="outline" className="w-full bg-transparent">
        + Add Another Activity
      </Button>
    </div>
  )
}
