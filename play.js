// const Joi = require('joi');
//
// const schema = Joi.object({
//   username: Joi.string()
//     .required()
//     .alphanum()
//     .min(3)
//     .max(30)
//     .required(),
//   password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/),
//   repeat_password: Joi.ref('password'),
//   access_token: [
//     Joi.string(),
//     Joi.number(),
//   ],
//   birth_year: Joi.number()
//     .integer()
//     .min(1900)
//     .max(2013),
//
//   email: Joi.string()
//     .required()
//     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// }).options({ abortEarly: false });
//
// const results = schema.validate({  });
//
// console.log(
//   JSON.stringify(results.error.details),
// );

const yup = require('yup');

const schema = yup.object({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  gender: yup.string().required(),
  password: yup.string().required(),
});

schema.validate({
  name: 'jimmy',
  age: '24',
  createdOn: '2014-09-23T19:25:25Z',
}, { abortEarly: false }).catch(err => console.log());
console.log('END');
