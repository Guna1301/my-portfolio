import { useState } from "react"
import emailjs from '@emailjs/browser'
import Alert from "../components/Alert"
import { Particles } from "../components/Particals"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showAlert,setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const showAlertMessage = (type,message)=>{
    setShowAlert(true)
    setAlertMessage(message)
    setAlertType(type)
    setTimeout(()=>{ 
      setShowAlert(false)
    },5000) 
    
  }
  
  const handleSubmit = async(e) => { 
    e.preventDefault()
    setIsLoading(true)
    try {
        await emailjs.send(
          "service_icvgkoy",
          "template_11no3mo",
          {
            from_name:formData.name,
            to_name:"Guna Sai",
            from_email:formData.email,
            to_email:"gskotipalli2005@gmail.com",
            message:formData.message,
            reply_to:formData.email
          },
          "wovPGSSh1DsVq1Axa" 
        )
        setIsLoading(false)
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        showAlertMessage('success','Your message has been sent successfully')
    } catch (error) {
      setIsLoading(false) 
      showAlertMessage('error','Error sending email')
      console.error(error)
    }
  }
  

  return (
    <section className="relative felx items-center c-space
    section-spacing">
      <Particles
        className="absolute inset-0 -z-60"
        quantity={500}
        ease={10}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
      <div className="flex flex-col items-center justify-center
      max-w-md p-5  mx-auto border border-white/10 rounded-2xl
      bg-primary">
         <div className="flex flex-col items-start w-full gap-5
         mb-10">
            <h2 className="text-heading">
              Contact Me
            </h2>
            <p className="font-normal text-neutral-400">
              I would love to hear from you! Whether you have a question,
              feedback, or just want to connect, feel free to reach out.
            </p>
         </div>
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="feild-label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="field-input input-focus"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="feild-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="field-input input-focus"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="feild-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Share your thoughts"
                  className="field-input input-focus"
                  autoComplete="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
            </div>
            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center
              rounded-md cursor-pointer bg-radial from-lavender
              to-royal hover-animation"
            >
                {isLoading?"Sending...":"Send"}
            </button>
         </form>
      </div>
    </section>
  )
}

export default Contact