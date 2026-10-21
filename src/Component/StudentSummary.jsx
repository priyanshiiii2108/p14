
const fields = [
  { label: 'Full Name', key: 'fullName' },
  { label: 'Email Address', key: 'email' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Date of Birth', key: 'dob' },
  { label: 'Gender', key: 'gender' },
  { label: 'Course', key: 'course' },
  { label: 'Address', key: 'address' },
]

export default function StudentSummary({ student }) {
  return (
    <section
      aria-live="polite"
      className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
    >
      <div className="bg-emerald-600 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl">
            ✓
          </span>
          <div>
            <h2 className="text-xl font-bold">Registration Successful</h2>
            <p className="mt-1 text-sm text-emerald-50">
              Submitted student details
            </p>
          </div>
        </div>
      </div>

      <dl className="grid gap-5 p-6 sm:grid-cols-2">
        {fields.map(({ label, key }) => (
          <div
            key={key}
            className={key === 'address' ? 'sm:col-span-2' : ''}
          >
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {label}
            </dt>
            <dd className="mt-2 break-words font-medium text-slate-800">
              {student[key] || 'Not provided'}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
