import React, { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  { id: "stylist", title: "Senior Stylist", desc: "Experienced hair stylist - 3+ years, creative portfolio required." },
  { id: "reception", title: "Front Desk Executive", desc: "Client-facing role; booking & hospitality experience preferred." },
];

export default function Career() {
  const [apply, setApply] = useState({ jobId: "", name: "", email: "", resume: null, msg: null });

  const handleChange = (e) => setApply({ ...apply, [e.target.name]: e.target.value });
  const handleFile = (e) => setApply({ ...apply, resume: e.target.files[0] });

  const handleApply = (e) => {
    e.preventDefault();
    if (!apply.jobId || !apply.name || !apply.email) { setApply(prev => ({...prev, msg: "Please fill required fields."})); return; }
    // TODO: wire to API or email
    setApply(prev => ({...prev, msg: "Application submitted. We'll review and contact you."}));
  };

  return (
    <section className="bg-black text-[#d4af37] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Careers</h1>
          <p className="text-gray-400 mt-3">Join the Naksh Salon family — opportunities to grow and create.</p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {jobs.map(j => (
              <div key={j.id} className="glass-card p-6 rounded-2xl mb-4">
                <h3 className="text-2xl font-semibold text-[#d4af37]">{j.title}</h3>
                <p className="text-gray-300 mt-2">{j.desc}</p>
                <button onClick={() => setApply(prev => ({...prev, jobId: j.id}))} className="btn-gold mt-4">Apply Now</button>
              </div>
            ))}
          </div>

          <form onSubmit={handleApply} className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[#d4af37] mb-3">Apply for a role</h3>

            <select name="jobId" value={apply.jobId} onChange={handleChange} className="w-full p-3 bg-black/40 border border-white/10 rounded-md text-gray-200 mb-3">
              <option value="">Select Role</option>
              {jobs.map(j => <option key={j.id} value={j.id}>{j.title}</option>)}
            </select>

            <input name="name" value={apply.name} onChange={handleChange} placeholder="Full name *" className="w-full p-3 bg-black/40 border border-white/10 rounded-md text-gray-200 mb-3" />
            <input name="email" value={apply.email} onChange={handleChange} placeholder="Email *" className="w-full p-3 bg-black/40 border border-white/10 rounded-md text-gray-200 mb-3" />
            <input type="file" onChange={handleFile} className="w-full text-gray-200 mb-3" />
            <button type="submit" className="btn-gold">Submit Application</button>

            {apply.msg && <p className="text-sm mt-3 text-gray-300">{apply.msg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
