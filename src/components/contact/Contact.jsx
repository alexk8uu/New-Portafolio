import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import "./contact.scss";

function Contact() {
  const form = useRef();
  const [message, setMessage ] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_txj1wy9",
        "template_ywiglpt",
        form.current,
        "cbBPpejZRh4QhURxd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.textContent);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="asset/handshake.png" alt="handshake" />
      </div>
      <div className="right">
        <h2>Contacto</h2>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <div className="textContainer">
            <span>Tu Nombre:</span>
            {errors.user_name?.type === 'required' && <p>Por favor rellene este campo</p>}
            </div>
            <input type="text" {...register("user_name", {
              required: true
            })} />
          </div>
          <div className="inputContainer">
            <div className="textContainer">
            <span>Tu Email:</span>
            {errors.user_email?.type === 'required' && <p>Por favor rellene este campo</p>} 
            {errors.user_email?.type === 'pattern' && <p>Por favor ingrese un email valido</p>} 
            </div>
            <input type="email" {...register("user_email", {
              required: true,
              pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            })} />
          </div>
          <div className="inputContainer">
            <div className="textContainer">
            <span>Mensaje:</span>
            {errors.user_message?.type === 'required' && <p>Por favor rellene este campo</p>} 
            </div>
            <textarea {...register("user_message",{
              required: true
            })} />
          </div>
          <button type="submit">Enviar</button>
          {message && <span className="message">Gracias, su mensaje fue enviado!</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
