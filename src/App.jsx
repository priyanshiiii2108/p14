
import { useState } from "react"
import FormField from "./Component/FormField";
import StudentSummary from "./Component/StudentSummary";

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  course: '',
  address: '',
}

const inputStyles =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'

export default function App() {
  const [formData, setFormData] = useState(initialForm)
  const [submittedStudent, setSubmittedStudent] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    // Clear the old summary when the user edits the form.
    setSubmittedStudent(null)
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Save a snapshot of the controlled input values.
    setSubmittedStudent({ ...formData })
  }

  function handleReset() {
    setFormData(initialForm)
    setSubmittedStudent(null)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-indigo-700 to-violet-700 px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Student Portal
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Student Registration
          </h1>
          <p className="mt-3 max-w-xl leading-7 text-indigo-100">
            Complete the form below to register your student
            details. All fields marked with * are required.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-5 py-10 sm:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-7 border-b border-slate-100 pb-5">
            <h2 className="text-xl font-bold text-slate-900">
              Personal Information
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your details accurately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />

              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

              <FormField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />

              <div className="space-y-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="course"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Select Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                >
                  <option value="">Choose a course</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="B.Com">B.Com</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>
            </div>

            <FormField
              label="Residential Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              required
              multiline
            />

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Register Student
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset Form
              </button>
            </div>
          </form>
        </section>

        {submittedStudent && (
          <StudentSummary student={submittedStudent} />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-5 text-center text-sm text-slate-500">
        Student Registration Portal · Built with React and Tailwind CSS
      </footer>
    </div>
  )
}
