const validate = values => {
  const errors = {};

  if (!values.nom) {
    errors.nom = 'Required';
  }

  if (!values.prenom) {
    errors.prenom = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  
  if (values.password !== values.password2) {
    errors.password2 = 'les mots de passe doivent être identique';
  }

  if (!values.password2) {
    errors.password2 = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  

  return errors;
};

export default validate;