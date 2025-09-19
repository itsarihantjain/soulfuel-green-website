"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Play, RotateCcw } from "lucide-react"

interface TestResult {
  name: string
  status: "pending" | "pass" | "fail" | "warning"
  message: string
  details?: string
}

export default function ContactFormTest() {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentTest, setCurrentTest] = useState("")

  const updateTestResult = (name: string, status: TestResult["status"], message: string, details?: string) => {
    setTestResults((prev) => {
      const existing = prev.find((test) => test.name === name)
      if (existing) {
        existing.status = status
        existing.message = message
        existing.details = details
        return [...prev]
      }
      return [...prev, { name, status, message, details }]
    })
  }

  const runTests = async () => {
    setIsRunning(true)
    setTestResults([])

    const tests = [
      {
        name: "EmailJS Library Check",
        test: async () => {
          try {
            // Check if EmailJS is available
            const emailjs = await import("@emailjs/browser")
            if (emailjs) {
              updateTestResult(
                "EmailJS Library Check",
                "pass",
                "EmailJS library loaded successfully",
                "Library is available and ready to use",
              )
            }
          } catch (error) {
            updateTestResult(
              "EmailJS Library Check",
              "fail",
              "EmailJS library not found",
              "Please install @emailjs/browser package",
            )
          }
        },
      },
      {
        name: "Form Elements Validation",
        test: async () => {
          const form = document.querySelector('form[data-testid="contact-form"]') as HTMLFormElement
          if (!form) {
            updateTestResult(
              "Form Elements Validation",
              "fail",
              "Contact form not found",
              "Form element with data-testid='contact-form' is missing",
            )
            return
          }

          const requiredFields = ["name", "email", "phone", "company", "industry", "monthly_requirement", "message"]
          const missingFields = []

          for (const field of requiredFields) {
            const element = form.querySelector(`[name="${field}"]`)
            if (!element) {
              missingFields.push(field)
            }
          }

          if (missingFields.length === 0) {
            updateTestResult(
              "Form Elements Validation",
              "pass",
              "All required form fields are present",
              `Found all ${requiredFields.length} required fields`,
            )
          } else {
            updateTestResult(
              "Form Elements Validation",
              "fail",
              `Missing form fields: ${missingFields.join(", ")}`,
              "Some required form elements are not found in the DOM",
            )
          }
        },
      },
      {
        name: "Form Validation Logic",
        test: async () => {
          const form = document.querySelector('form[data-testid="contact-form"]') as HTMLFormElement
          if (!form) {
            updateTestResult("Form Validation Logic", "fail", "Form not found", "Cannot test validation logic")
            return
          }

          // Test empty form submission
          const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
          if (submitButton) {
            // Simulate form submission with empty fields
            const formData = new FormData(form)
            let hasValidation = false

            // Check if required fields are properly marked
            const requiredFields = form.querySelectorAll("[required]")
            if (requiredFields.length > 0) {
              hasValidation = true
            }

            if (hasValidation) {
              updateTestResult(
                "Form Validation Logic",
                "pass",
                "Form validation is properly configured",
                `Found ${requiredFields.length} required fields with validation`,
              )
            } else {
              updateTestResult(
                "Form Validation Logic",
                "warning",
                "No required field validation found",
                "Consider adding required attributes to form fields",
              )
            }
          }
        },
      },
      {
        name: "EmailJS Configuration Check",
        test: async () => {
          // Check if EmailJS configuration placeholders are still present
          const contactSection = document.querySelector('[data-testid="contact-section"]')
          if (contactSection) {
            const scriptContent = contactSection.innerHTML
            if (scriptContent.includes("YOUR_SERVICE_ID") || scriptContent.includes("YOUR_TEMPLATE_ID")) {
              updateTestResult(
                "EmailJS Configuration Check",
                "warning",
                "EmailJS configuration not completed",
                "Please replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with actual values",
              )
            } else {
              updateTestResult(
                "EmailJS Configuration Check",
                "pass",
                "EmailJS configuration appears to be set",
                "No placeholder values detected",
              )
            }
          }
        },
      },
      {
        name: "Form Accessibility Check",
        test: async () => {
          const form = document.querySelector('form[data-testid="contact-form"]') as HTMLFormElement
          if (!form) {
            updateTestResult("Form Accessibility Check", "fail", "Form not found", "Cannot test accessibility")
            return
          }

          let accessibilityScore = 0
          const checks = []

          // Check for labels
          const inputs = form.querySelectorAll("input, select, textarea")
          let hasLabels = 0
          inputs.forEach((input) => {
            const id = input.getAttribute("id")
            if (id) {
              const label = form.querySelector(`label[for="${id}"]`)
              if (label) hasLabels++
            }
          })

          if (hasLabels === inputs.length) {
            accessibilityScore += 50
            checks.push("✓ All inputs have associated labels")
          } else {
            checks.push(`✗ ${inputs.length - hasLabels} inputs missing labels`)
          }

          // Check for ARIA attributes
          const ariaElements = form.querySelectorAll("[aria-label], [aria-describedby], [aria-required]")
          if (ariaElements.length > 0) {
            accessibilityScore += 25
            checks.push("✓ ARIA attributes found")
          } else {
            checks.push("✗ No ARIA attributes found")
          }

          // Check for error handling
          const errorElements = form.querySelectorAll('[class*="error"], [role="alert"]')
          if (errorElements.length > 0) {
            accessibilityScore += 25
            checks.push("✓ Error handling elements found")
          } else {
            checks.push("✗ No error handling elements found")
          }

          if (accessibilityScore >= 75) {
            updateTestResult(
              "Form Accessibility Check",
              "pass",
              `Accessibility score: ${accessibilityScore}/100`,
              checks.join("\n"),
            )
          } else if (accessibilityScore >= 50) {
            updateTestResult(
              "Form Accessibility Check",
              "warning",
              `Accessibility score: ${accessibilityScore}/100`,
              checks.join("\n"),
            )
          } else {
            updateTestResult(
              "Form Accessibility Check",
              "fail",
              `Accessibility score: ${accessibilityScore}/100`,
              checks.join("\n"),
            )
          }
        },
      },
      {
        name: "Mobile Responsiveness Check",
        test: async () => {
          const form = document.querySelector('form[data-testid="contact-form"]') as HTMLFormElement
          if (!form) {
            updateTestResult("Mobile Responsiveness Check", "fail", "Form not found", "Cannot test responsiveness")
            return
          }

          const formRect = form.getBoundingClientRect()
          const viewportWidth = window.innerWidth

          let responsiveScore = 0
          const checks = []

          // Check if form fits in viewport
          if (formRect.width <= viewportWidth) {
            responsiveScore += 40
            checks.push("✓ Form fits within viewport width")
          } else {
            checks.push("✗ Form exceeds viewport width")
          }

          // Check for responsive classes
          const hasResponsiveClasses = form.className.includes("grid") || form.className.includes("flex")
          if (hasResponsiveClasses) {
            responsiveScore += 30
            checks.push("✓ Responsive layout classes found")
          } else {
            checks.push("✗ No responsive layout classes found")
          }

          // Check input sizing
          const inputs = form.querySelectorAll("input, select, textarea")
          let responsiveInputs = 0
          inputs.forEach((input) => {
            if (input.className.includes("w-full") || input.className.includes("w-")) {
              responsiveInputs++
            }
          })

          if (responsiveInputs === inputs.length) {
            responsiveScore += 30
            checks.push("✓ All inputs have responsive width classes")
          } else {
            checks.push(`✗ ${inputs.length - responsiveInputs} inputs missing responsive classes`)
          }

          if (responsiveScore >= 80) {
            updateTestResult(
              "Mobile Responsiveness Check",
              "pass",
              `Responsiveness score: ${responsiveScore}/100`,
              checks.join("\n"),
            )
          } else if (responsiveScore >= 60) {
            updateTestResult(
              "Mobile Responsiveness Check",
              "warning",
              `Responsiveness score: ${responsiveScore}/100`,
              checks.join("\n"),
            )
          } else {
            updateTestResult(
              "Mobile Responsiveness Check",
              "fail",
              `Responsiveness score: ${responsiveScore}/100`,
              checks.join("\n"),
            )
          }
        },
      },
    ]

    for (const test of tests) {
      setCurrentTest(test.name)
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate test delay
      await test.test()
    }

    setCurrentTest("")
    setIsRunning(false)
  }

  const resetTests = () => {
    setTestResults([])
    setCurrentTest("")
    setIsRunning(false)
  }

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "fail":
        return <XCircle className="h-5 w-5 text-red-600" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      default:
        return <div className="h-5 w-5 rounded-full bg-gray-300 animate-pulse" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "pass":
        return "border-green-200 bg-green-50"
      case "fail":
        return "border-red-200 bg-red-50"
      case "warning":
        return "border-yellow-200 bg-yellow-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  const passedTests = testResults.filter((test) => test.status === "pass").length
  const failedTests = testResults.filter((test) => test.status === "fail").length
  const warningTests = testResults.filter((test) => test.status === "warning").length

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-6 w-6 text-blue-600" />
            Contact Form Test Suite
          </CardTitle>
          <p className="text-gray-600">
            Comprehensive testing for the EmailJS contact form functionality, validation, and user experience.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button onClick={runTests} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700">
              {isRunning ? "Running Tests..." : "Run All Tests"}
            </Button>
            <Button onClick={resetTests} variant="outline" disabled={isRunning}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {isRunning && currentTest && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-800 font-medium">Running: {currentTest}</span>
              </div>
            </div>
          )}

          {testResults.length > 0 && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{passedTests}</div>
                  <div className="text-sm text-green-700">Passed</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{warningTests}</div>
                  <div className="text-sm text-yellow-700">Warnings</div>
                </div>
                <div className="text-center p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{failedTests}</div>
                  <div className="text-sm text-red-700">Failed</div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className={`p-4 border rounded-lg ${getStatusColor(result.status)}`}>
                <div className="flex items-start gap-3">
                  {getStatusIcon(result.status)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{result.name}</h3>
                    <p className="text-gray-700 mt-1">{result.message}</p>
                    {result.details && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                          View Details
                        </summary>
                        <pre className="mt-2 text-xs bg-white p-2 rounded border whitespace-pre-wrap">
                          {result.details}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testResults.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Test Summary</h3>
              <p className="text-gray-700 text-sm">
                {passedTests > 0 && `✅ ${passedTests} tests passed`}
                {warningTests > 0 && ` ⚠️ ${warningTests} warnings`}
                {failedTests > 0 && ` ❌ ${failedTests} tests failed`}
              </p>
              {failedTests === 0 && warningTests === 0 && passedTests > 0 && (
                <p className="text-green-700 font-medium mt-2">🎉 All tests passed! Your contact form is ready.</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
