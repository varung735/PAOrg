### Steps to run the code on your PC

1. create a .env file in your PC before and run the npm install command on your console to install the necessary dependencies.

2. then refer to the sampleEnv.txt file and assign the `PORT` and `JWT_SECRET` variables. `Don't change the value of API_LINK`

3. Refer to the package.json file for the commands to start the server or you could simply use `npm run start` or `npm run dev` for development purposes.

4. As this program doesn't has an UI. You have to use API testing tools such as `Postman` etc.

5. As in the assignment, There was no need for the database. You could just copy the provided object below in the login route, in req.body.

provide your `username` and `password` in the body. Your request body should look like the object below. 

```
{
    username: 'your-username',
    password: 'your-password'
}
```
6. Use this route and paste the provided object in req.body and extract the token from response.

```http://localhost:{your-port-no}/users/login```

7. The token generated is a bearer token.

8. before making a request for countries, firstly, paste the token in authorization section of request headers and select the header value to bearer token (if you're using `postman`, this can vary if you're using other tools apart from postman).

9. In order to find the country details from the country name use the route provided below.

``http://localhost:{your-port-no}/countries/getCountryDetails``

10. The request body of the above should look like this one below.

```
{
    "countryName": "Republic of India"
}
```

You would get all the details for `Republic of India` by making request to the `/getCountryDetails` URL.

11. If you want to filter countries according to some parameter like currency or population. then, make request to this URL given below.

``http://localhost:{your-port-no}/countries/filterCountries?page={page-count}``

12. This URL gives data in chunks (supports pagination). you have to provide value to the `page` query. If you fail to provide value to page query. don't worry, Its assigned to one by default.

13. You would receive the current page numbers and total number of pages in the response object. 

14. If you want to make a request at `/filterCountries` Url. firstly, you have to provide the filter and filter-value in the request body. The body should look like the object below.

```
{
    "filter": "currency",
    "filterValue": "rupee"
}
```

If you put this object above the request body. The Url will fetch the countries with all their details which uses rupee as their currency.

> Note: Data should be sent in JSON format only.
