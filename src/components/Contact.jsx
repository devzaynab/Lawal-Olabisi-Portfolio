import { useRef, useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6'
import './Contact.css'
import { contactLinks } from '../data/portfolioData'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const iconMap = {
  Email: FaEnvelope,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  'Twitter/X': FaXTwitter,
  WhatsApp: FaWhatsapp,
}

function getEmailErrorMessage(error) {
  const detail = `${error?.text || ''} ${error?.message || ''}`.toLowerCase()
  const status = Number(error?.status)

  if (detail.includes('template') && (detail.includes('not found') || detail.includes('invalid'))) {
    return 'The contact form email template could not be found. Please check the Template ID in EmailJS.'
  }
  if (detail.includes('service') && (detail.includes('not found') || detail.includes('invalid'))) {
    return 'The email service could not be found. Please check the Service ID in EmailJS.'
  }
  if (detail.includes('public key') || detail.includes('user_id') || status === 401) {
    return 'EmailJS could not verify the account key. Please check the Public Key in EmailJS.'
  }
  if (detail.includes('origin') || detail.includes('domain') || detail.includes('referer')) {
    return 'This website is not authorized in EmailJS yet. Add its domain to the EmailJS allowed origins.'
  }
  if (status === 429 || detail.includes('limit') || detail.includes('too many')) {
    return 'The email service is temporarily busy. Please wait a moment and try again.'
  }
  if (detail.includes('network') || detail.includes('fetch') || status >= 500) {
    return 'The email service is temporarily unavailable. Check your connection and try again.'
  }

  return 'Your message could not be sent. Please try again later or contact me using the email link.'
}

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (submitState.type) setSubmitState({ type: '', message: '' })
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject.'

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters long.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitState({ type: 'error', message: 'Please correct the highlighted fields.' })
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setSubmitState({ type: '', message: '' })

    if (!(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey)) {
      setSubmitState({
        type: 'error',
        message: 'EmailJS is not configured yet. Add the service and template values in your .env file.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const emailjsModule = await import('@emailjs/browser')
      await emailjsModule.default.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        { publicKey: emailjsConfig.publicKey },
      )

      setSubmitState({ type: 'success', message: 'Your message was sent successfully.' })
      setFormData(initialForm)
      formRef.current?.reset()
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: getEmailErrorMessage(error),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="page-section" id="contact">
      <div className="container section-content">
        <p className="section-label">LET&apos;S CONNECT</p>
        <h2 className="section-title">Let&apos;s connect.</h2>
        <p className="section-supporting-text">
          Have an opportunity or a project in mind? I&apos;d love to hear from you.
        </p>

        <div className="contact-layout">
          <div className="contact-panel">
            <div className="contact-list">
              {contactLinks.map((item) => {
                const Icon = iconMap[item.label] || FaEnvelope
                return (
                  <a className="contact-item" href={item.href} key={item.label} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <span className="contact-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="contact-text">
                      <strong>{item.label}</strong>
                      {['Email', 'WhatsApp'].includes(item.label) ? (
                        <small>{item.value}</small>
                      ) : null}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} required />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </div>
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} required />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} required />
              {errors.subject ? <span className="field-error">{errors.subject}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} required />
              {errors.message ? <span className="field-error">{errors.message}</span> : null}
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitState.message ? (
              <p className={`submit-message ${submitState.type}`}>{submitState.message}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
