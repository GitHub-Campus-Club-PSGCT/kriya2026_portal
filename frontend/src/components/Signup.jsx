import { useState } from 'react'
import '../styles/Signup.css'

function Signup({ onLogin }) {
    const [name, setName] = useState('')
    const [rollnum, setRollnum] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [college, setCollege] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        console.log({ name, rollnum, email, mobile, college })
        // Process signup logic here
    }

    return (
        <div className="signup-container">
            <div className="signup-glass-card">
                <div className="signup-header">
                    <h1>KRIYA<span>2026</span></h1>
                    <p>Enlist in the Cyber Seas</p>
                </div>

                <form onSubmit={handleSignup}>
                    <div className="signup-grid">
                        <div className="form-group full-width">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Roll Number</label>
                            <input
                                type="text"
                                value={rollnum}
                                onChange={(e) => setRollnum(e.target.value)}
                                placeholder="Roll No"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Mobile</label>
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Phone"
                                required
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@university.com"
                                required
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>College Name</label>
                            <input
                                type="text"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                placeholder="Your institution"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="signup-btn">Create Account</button>

                    <div className="switch-link">
                        Already part of the crew?
                        <button type="button" className="link-button" onClick={onLogin}>
                            Login Here
                        </button>
                    </div>
                </form>

                <div className="signup-footer">
                    <p>KRIYA REGISTRATION PROTOCOL v2.6</p>
                </div>
            </div>
        </div>
    )
}

export default Signup
