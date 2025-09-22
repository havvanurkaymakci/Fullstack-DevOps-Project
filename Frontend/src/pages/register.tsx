'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
//import '../app/styles/login-register.css' // CSS dosyasının doğru yolu

type FormData = {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  password2: string
}

type Errors = {
  first_name?: string
  last_name?: string
  username?: string
  email?: string
  password?: string
  password2?: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState<Errors>({})
  const { registerUser } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    const result = await registerUser(formData)

    if (result.success) {
      router.push('/login')
    } else {
      setErrors(result.errors)
    }
  }

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {[
          ['first_name', 'First Name'],
          ['last_name', 'Last Name'],
          ['username', 'Username'],
          ['email', 'Email'],
          ['password', 'Password'],
          ['password2', 'Confirm Password']
        ].map(([field, label]) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>{label}</label>
            <input
              type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              required
            />
            {errors[field as keyof Errors] && (
              <p className="error">{errors[field as keyof Errors]}</p>
            )}
          </div>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
