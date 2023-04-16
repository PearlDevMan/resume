import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  from_name: string
  from_email: string
  message: string
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      service_id: 'service_9hvh30h',
      template_id: 'template_2s2xp45',
      user_id: 'G2BuKPNvy2R3CS_fw',
      template_params: {
        from_name: '',
        from_email: '',
        message: ''
      }
    }),
    [],
  );

  const [data, setData] = useState(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, template_params: {...data.template_params, ...fieldData}});

    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      console.log(data)
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if(response.ok){
        alert('Your mail is sent!');
      }else{
        alert('Oops... ');
      }
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="from_name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
