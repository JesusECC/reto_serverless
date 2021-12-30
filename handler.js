var req = require('request');
const params = {
  url: 'https://swapi.py4e.com/api',
  path: '/people/',
  // headers: { 'Content-Type': 'application/json' },
  // json: JSON.parse({ id: 1})
};
export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: await apiPeople()
    }),
  };
};



const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);

const apiPeople = () => new Promise ((resolve,reject) => {
  req.get(params, function (err, res, body) {
    if (err) {
      return resolve(err)
    } else {
      return resolve(body)
    }
  });
})
