"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ContactSectionData } from "@/lib/types"

interface ContactSectionProps {
  data: ContactSectionData;
}

// Zod schema for form validation
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
})

type ContactFormData = z.infer<typeof contactSchema>

// Component state and form setup
export function ContactSection({ data }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { title, description, buttonText } = data;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Validates input on blur
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  // Watch form values for character counting
  const messageValue = watch("message")

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Log form data to console
      console.log("=== CONTACT FORM SUBMISSION ===")
      console.log("Timestamp:", new Date().toISOString())
      console.log("Form Data:", data)
      console.log("================================")
      
      setFormSubmitted(true)
      
      // Reset form after 3 seconds and hide success message
      setTimeout(() => {
        setFormSubmitted(false)
        reset()
      }, 3000)
      
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-80 right-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 left-20 w-20 h-20 border-4 border-blue-300 rounded-2xl rotate-45 opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-18 h-18 border-4 border-red-300 rounded-full opacity-30"></div>

        {/* Large colorful blobs */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-l from-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-300/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-blue-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-red-50/30 opacity-50"></div>

          {formSubmitted ? (
            <div className="text-center py-12 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Message Sent!</h3>
              <p className="text-gray-600">We'll get back to you soon to discuss your next big thing.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 rounded-2xl focus:ring-0 transition-all duration-300 text-gray-900 shadow-sm ${
                      errors.name 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-blue-200 focus:border-blue-500"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 rounded-2xl focus:ring-0 transition-all duration-300 text-gray-900 shadow-sm ${
                      errors.email 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-blue-200 focus:border-blue-500"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className="text-sm text-gray-500">
                    {messageValue?.length || 0}/1000
                  </span>
                </div>
                <textarea
                  rows={6}
                  {...register("message")}
                  className={`w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 rounded-2xl focus:ring-0 transition-all duration-300 text-gray-900 resize-none shadow-sm ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-blue-200 focus:border-blue-500"
                  }`}
                  placeholder="Tell us about your next big thing... (minimum 10 characters)"
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit button + CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-brand-blue text-white py-3 lg:py-4 rounded-full text-lg font-semibold hover:bg-brand-black transition-all duration-300 flex items-center justify-center overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-brand-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></div>
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      {/* Loading spinner */}
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>{buttonText}</>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}