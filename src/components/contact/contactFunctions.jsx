import emailjs from 'emailjs-com';

export function checkValidtion(formData) {
  let erorMesName = "";
  let erorMesSubject = "";
  let erorMesEmail = "";
  let erorMesMessage = "";

  if (!formData.subject) {
    erorMesSubject = "Please enter a subject";
  } else if (formData.subject.length < 2) {
    erorMesSubject = "Please enter more then 2 letters";
  }

  let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!formData.email.match(mailformat)) {
    erorMesEmail = "Please enter a valid email adress";
  }

  if (!formData.name) {
    erorMesName = "Please enter a name";
  } else if (formData.name.length < 2) {
    erorMesName = "Please enter a valid name";
  }

  if (!formData.message) {
    erorMesMessage = "Please enter a massage";
  } else if (formData.message.length < 4) {
    erorMesMessage = "Please enter a valid massage";
  }

  if (erorMesMessage || erorMesName || erorMesSubject || erorMesEmail) {
      const errors = {
        name: erorMesName,
        subject: erorMesSubject,
        message: erorMesMessage,
        email: erorMesEmail,
      }
    return errors;
  } else {
    return null;
  }
}

export function sendEmail (e,variables) {
    e.preventDefault();
    return new Promise((resolve, reject) => {
    emailjs.send('gmail', 'template_6mjewug',variables,'user_uCwwAT8ziQG7RljzlXBUF' )
    .then((result) => {
        console.log('Email successfully sent!')
        resolve(result);
    }, (error) => {
        console.log(error.text);
        reject(error);
    });
    })
}
