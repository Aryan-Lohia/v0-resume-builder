"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function SkillsStep({ data, setData }: any) {
  const [skillInput, setSkillInput] = useState("")

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setData({
        ...data,
        skills: [...(data.skills || []), skillInput.trim()],
      })
      setSkillInput("")
    }
  }

  const handleRemoveSkill = (index: number) => {
    setData({
      ...data,
      skills: data.skills.filter((_: any, i: number) => i !== index),
    })
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-600">
        Add 5-6 tools, skills, or competencies (e.g., Excel, Leadership, Communication, Python, etc.)
      </p>

      <Card className="p-6 bg-slate-50">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Add a Skill or Tool</label>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., Python, Leadership, Excel, Figma"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
              />
              <Button onClick={handleAddSkill} style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
                Add
              </Button>
            </div>
          </div>

          {data.skills && data.skills.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Your Skills</label>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill: string, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 cursor-pointer hover:bg-red-100"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    {skill}
                    <span className="ml-2">×</span>
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-2">Click a skill to remove it</p>
            </div>
          )}
        </div>
      </Card>

      {data.skills && data.skills.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            ✓ {data.skills.length} skill{data.skills.length !== 1 ? "s" : ""} added
          </p>
        </div>
      )}
    </div>
  )
}
