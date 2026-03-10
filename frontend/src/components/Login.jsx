import React, { useState } from 'react'
import '../styles/Login.css'

function Login({ onLoginSuccess }) {
    const [kriyaId, setKriyaId] = useState('')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [stage, setStage] = useState('input') // 'input' or 'otp'
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSendOtp = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            // Placeholder for Send OTP API
            // In the future, this will call the API route provided by the user
            console.log('Sending OTP to:', email, 'for Kriya ID:', kriyaId)

            // Simulation of API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStage('otp')
        } catch (err) {
            setError('Failed to send OTP. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleVerifyOtp = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            // Placeholder for Verify OTP API
            // In the future, this will call the API route provided by the user
            console.log('Verifying OTP:', otp, 'for:', email)

            // Simulation of API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (onLoginSuccess) onLoginSuccess()
        } catch (err) {
            setError('Invalid OTP. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-container">
            <div className="login-glass-card">
                <div className="login-header">
                    <h1>KRIYA<span>2026</span></h1>
                    <p>{stage === 'input' ? 'Secure Entry to the Sea of Code' : 'Verify Your Identity'}</p>
                </div>

                <form onSubmit={stage === 'input' ? handleSendOtp : handleVerifyOtp}>
                    {stage === 'input' ? (
                        <>
                            <div className="form-group">
                                <label>KRIYA ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Kriya ID"
                                    value={kriyaId}
                                    onChange={(e) => setKriyaId(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            {kriyaId && email && (
                                <button type="submit" className="login-btn" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send OTP'}
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="form-group">
                                <label>ONE-TIME PASSWORD</label>
                                <input
                                    type="text"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>
                            <button type="submit" className="login-btn" disabled={loading}>
                                {loading ? 'Verifying...' : 'Verify & Login'}
                            </button>
                            <button type="button" className="btn-secondary" onClick={() => setStage('input')}>
                                Change Email/ID
                            </button>
                        </>
                    )}
                </form>

                {error && <div className="error-message">{error}</div>}

                <div className="login-footer">
                    <p>Protected by Kriya Security Protocol</p>
                </div>
            </div>
        </div>
    )
}

export default Login