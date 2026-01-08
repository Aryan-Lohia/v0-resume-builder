"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PersonalInfoStep from "./form-steps/personal-info"
import WorkExperienceStep from "./form-steps/work-experience"
import ProjectsStep from "./form-steps/projects"
import LeadershipStep from "./form-steps/leadership"
import EducationStep from "./form-steps/education"
import CoActivitiesStep from "./form-steps/co-activities"

export default function ResumeForm({
  onSubmit,
  initialData,
}: {
  onSubmit: (data: any) => void
  initialData?: any
}) {
  const [currentStep, setCurrentStep] = useState(0)

  const defaultFormData = {
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      education: "",
      photo: "",
    },
    workExperience: [
      {
        id: 1,
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
        highlights: ["", "", ""],
        icon: "",
      },
    ],
    projects: [
      {
        id: 1,
        name: "",
        duration: "",
        objective: "",
        highlights: ["", ""],
      },
    ],
    leadership: [
      {
        id: 1,
        position: "",
        organization: "",
        duration: "",
        bullets: ["", "", ""],
      },
    ],
    education: {
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
      universityIcon: "",
      class12School: "",
      class12Board: "",
      class12Marks: "",
      class10School: "",
      class10Board: "",
      class10Marks: "",
    },
    coActivities: [
      {
        id: 1,
        name: "",
        level: "",
        achievement: "",
      },
      {
        id: 2,
        name: "",
        level: "",
        achievement: "",
      },
      {
        id: 3,
        name: "",
        level: "",
        achievement: "",
      },
    ],
  }

  const [formData, setFormData] = useState(initialData || defaultFormData)

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const steps = [
    { title: "Personal Information", component: PersonalInfoStep },
    { title: "Internships & Work Experience", component: WorkExperienceStep },
    { title: "Projects", component: ProjectsStep },
    { title: "Leadership", component: LeadershipStep },
    { title: "Education", component: EducationStep },
    { title: "Co-curricular Activities", component: CoActivitiesStep },
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (step === 0) {
      const pi = formData.personalInfo
      if (!pi.fullName.trim()) newErrors.fullName = "Full name is required"
      if (!pi.email.trim()) newErrors.email = "Email is required"
      if (!pi.phone.trim()) newErrors.phone = "Phone number is required"
      if (!pi.linkedinUrl.trim()) newErrors.linkedinUrl = "LinkedIn URL is required"
      if (!pi.education.trim()) newErrors.education = "Education is required"
      if (!pi.photo) newErrors.photo = "Photo is required"
    } else if (step === 1) {
      formData.workExperience.forEach((exp, idx) => {
        if (!exp.company.trim()) newErrors[`company-${idx}`] = "Company is required"
        if (!exp.role.trim()) newErrors[`role-${idx}`] = "Role is required"
        if (!exp.startDate.trim()) newErrors[`startDate-${idx}`] = "Start date is required"
        if (!exp.endDate.trim()) newErrors[`endDate-${idx}`] = "End date is required"
        if (!exp.description.trim()) newErrors[`description-${idx}`] = "Description is required"
        exp.highlights.forEach((h, hidx) => {
          if (!h.trim()) newErrors[`highlight-${idx}-${hidx}`] = "Highlight is required"
        })
      })
    } else if (step === 2) {
      formData.projects.forEach((proj, idx) => {
        if (!proj.name.trim()) newErrors[`projName-${idx}`] = "Project name is required"
        if (!proj.duration.trim()) newErrors[`projDuration-${idx}`] = "Duration is required"
        if (!proj.objective.trim()) newErrors[`projObjective-${idx}`] = "Objective is required"
        proj.highlights.forEach((h, hidx) => {
          if (!h.trim()) newErrors[`projHighlight-${idx}-${hidx}`] = "Highlight is required"
        })
      })
    } else if (step === 3) {
      formData.leadership.forEach((lead: any, idx: number) => {
        if (!lead.position.trim()) newErrors[`position-${idx}`] = "Position is required"
        if (!lead.organization.trim()) newErrors[`organization-${idx}`] = "Organization is required"
        if (!lead.duration.trim()) newErrors[`duration-${idx}`] = "Duration is required"
        ;(lead.bullets || ["", "", ""]).forEach((bullet: string, bidx: number) => {
          if (!bullet.trim()) newErrors[`bullet-${idx}-${bidx}`] = "Bullet point is required"
        })
      })
    } else if (step === 4) {
      const edu = formData.education
      if (!edu.university.trim()) newErrors.university = "University is required"
      if (!edu.degree.trim()) newErrors.degree = "Degree is required"
      if (!edu.startYear.trim()) newErrors.startYear = "Start year is required"
      if (!edu.endYear.trim()) newErrors.endYear = "End year is required"
      if (!edu.class12School.trim()) newErrors.class12School = "Class 12 school is required"
      if (!edu.class12Board.trim()) newErrors.class12Board = "Class 12 board is required"
      if (!edu.class12Marks.trim()) newErrors.class12Marks = "Class 12 marks are required"
      if (!edu.class10School.trim()) newErrors.class10School = "Class 10 school is required"
      if (!edu.class10Board.trim()) newErrors.class10Board = "Class 10 board is required"
      if (!edu.class10Marks.trim()) newErrors.class10Marks = "Class 10 marks are required"
    } else if (step === 5) {
      formData.coActivities.forEach((act, idx) => {
        if (!act.name.trim()) newErrors[`actName-${idx}`] = "Activity name is required"
        if (!act.level.trim()) newErrors[`actLevel-${idx}`] = "Level is required"
        if (!act.achievement.trim()) newErrors[`actAchievement-${idx}`] = "Achievement is required"
      })
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const CurrentStepComponent = steps[currentStep].component

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
        window.scrollTo(0, 0)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      onSubmit(formData)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-2 ${
                    index === currentStep
                      ? "text-white"
                      : index < currentStep
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-700"
                  }`}
                  style={index === currentStep ? { backgroundColor: '#ec3a5d' } : {}}
                >
                  {index < currentStep ? "✓" : index + 1}
                </div>
                <span className="text-xs text-center text-gray-600 line-clamp-2">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{steps[currentStep].title}</h2>
          <CurrentStepComponent data={formData} setData={setFormData} errors={errors} />
        </div>

        <div className="flex justify-between pt-6 border-t border-gray-200">
          <Button onClick={handleBack} variant="outline" disabled={currentStep === 0} className="px-6 bg-transparent">
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext} className="px-6" style={{ backgroundColor: '#ec3a5d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d12e4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec3a5d'}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="px-6 bg-green-500 hover:bg-green-600">
              Generate Resume
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
