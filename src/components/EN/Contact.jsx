import React from "react";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";

import broom from "../../assets/broom.gif";

function Contact({ setOuija, ouija }) {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, r) => {
    const templateId = "template_206ncrb";
    const serviceId = "service_c5h2qia";

    // Ici, nous récupérons les informations du formulaire.
    // eslint-disable-next-line no-use-before-define
    sendEmail(serviceId, templateId, {
      Name: data.Name,
      Email: data.Email,
      Phone: data.Phone,
      Message: data.Message,
      // reply_to: r.target.reset() Permet de supprimer tous les champs une fois l'email envoyer
      reply_to: r.target.reset(),
    });
  };

  /**
   *
   * @param {string :adresse email} serviceId
   * @param {template : mise en forme de l'email} templateId
   * @param {object : data form} variables
   * la fonction sendEmail va envoyer toutes les informations du formulaire (variables) pour
   * l'envoyer a emailJS sur l'adresse mail teammiditrente (serviceId) et le mettre
   * enforme grace au templateId
   */
  const sendEmail = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "DnGsoBeozO6fJX9dI")
      .then((res) => {
        // eslint-disable-next-line no-restricted-syntax
        console.info("succes status :", res.status);
      })
      .catch((error) => console.error("une erreur est survenue", error));
  };

  return (
    <section className="contact_form_container">
      <h2 className="skills_title">Contact me</h2>
      <form
        action="form"
        className="contact_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="nameInput">
          Name
          <input
            type="text"
            placeholder="Enter your name"
            name="nameInput" // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Name", { required: true })}
          />
        </label>
        <label htmlFor="emailInput">
          Email
          <input
            type="email"
            placeholder="Enter your email"
            name="emailInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Email", { required: true })}
          />
        </label>
        <label htmlFor="phoneInput">
          Number Phone
          <input
            type="tel"
            placeholder="Enter your phone number"
            name="phoneInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Phone", { required: true })}
          />
        </label>
        <label htmlFor="messageInput">
          Your message
          <textarea
            type="text"
            name="sujetlInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Message", { required: true })}
          />
        </label>
        <button type="submit" value="send" className="contact_button">
          Submit
        </button>
      </form>

      <HashLink to="#Home" className="sticky">
        <button
          type="button"
          className="no_button"
          onMouseEnter={() => setOuija("arrow_button_hover")}
          onMouseLeave={() => setOuija("arrow_button")}
        >
          <img src={broom} alt="broom" className={ouija} />
        </button>
      </HashLink>
    </section>
  );
}

export default Contact;
