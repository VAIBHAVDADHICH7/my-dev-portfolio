import ContactForm from '../../components/ContactForm'
import SocialLinks from '../../components/SocialLinks'

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-neutral-400">Let's build something great together. Send me a message!</p>
      <ContactForm />
      <SocialLinks />
    </div>
  )
}
