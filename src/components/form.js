import { useForm } from "../hooks/useForm";
import React from "react";
import "../assets/css/Form.css";
import { useTranslation } from "react-i18next"; 


const initialForm = {
    nombre: "",
    contacto: "",
    mensaje: "", 
  } 


  const validationsForm = (form) => {
    let errors = {};
    if (!form.nombre.trim()) {
      errors.nombre = "El campo 'Nombre' es requerido.";
    }
    if (!form.contacto.trim()) {
      errors.contacto = "El campo 'E-mail y/o teléfono' es requerido.";
    }
    if (!form.mensaje.trim()) {
      errors.mensaje = "El campo 'Mensaje' es requerido.";
    }
    return errors;
  }

    const Form = () => {
    const {    
        form,
        errors,
        loading,
        reponse,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm);

    const [t] = useTranslation("nosotros");


return (

  <div><form onSubmit={handleSubmit}>
                <h5 className="">{t("footer.mensaje")}</h5>
                <input 
                name="nombre" placeholder={t("form.Name")} onBlur={handleBlur} onChange={handleChange} value={form.nombre} required/>
                {errors.nombre&& <p className="requerido">{errors.nombre}</p>}
                <input name="contacto" type="text" placeholder={t("form.Contact")} onBlur={handleBlur} onChange={handleChange} value={form.contacto} required/>
                {errors.contacto&& <p className="requerido">{errors.contacto}</p>}
                <textarea name="mensaje" placeholder={t("form.Mensaje")} onBlur={handleBlur} onChange={handleChange} value={form.mensaje} required ></textarea>
                {errors.mensaje&& <p className="requerido">{errors.mensaje}</p>}
                <div className="divEnviar"><input type="submit" value={t("form.Enviar")} className="enviar"/></div>
                
        </form>
        {loading && <p className="enviado">{t("form.Enviando")}</p>}
        {reponse && <p className="enviado">{t("form.Enviado")}</p>}
        
        </div>
     
)}

export default Form; 