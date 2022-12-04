<a name="readme-top"></a>
# EmpSalaryMgmtRepo
The repository for Employee Salary Management assignment by Toppan Ecquaria.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-application">Running Application</a></li>
      </ul>
    </li>
    <li><a href="#testing-web">Testing Web</a></li>
    <li><a href="#testing-api">Testing Api</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is an assignment project which take part of one of the interview process.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

1. Spring Boot
2. Angular
3. Bootstrap

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Please follow the steps below to be able to run the project.

### Prerequisites

1. Docker install

### Running application

1. Download this repository as Zip file
2. Extract the downloaded zip file in desired location
3. Open command prompt (Window+R) in window or open Terminal in Mac
4. In commsnd prompt or Terminal, change directory to the extracted location (the final path will look like /EmpSalaryMgmtRepo-main)
5. Run the following command
  ```sh
  docker-compose up
  ```
6. Once you see "Started EmpSalaryMgmtAppApplication" in the command prompt or Terminal, the application is running successfully
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing Web

To test the application via web, please use localhost:4200 in the address bar of the chrome browser.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing Api

To testing application api via third party tools like postman, please use http://localhost:8081/employee as the base url.
This application exposes two Api:

1. http://localhost:8081/employee/users (Http GET API)
  * usage example
  ```sh
  http://localhost:8081/employee/users?minSalary=0&maxSalary=10000&sort=+salary&offset=0&limit=9
  ```
   
2. http://localhost:8081/employee/upload (Http POST API)
  * make sure the csv file is uploaded using "form-data"

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

If you have any issue setting up or running the application, please kindly help to contact me.

* Name : Soe Ya Htet
* Phone : +6593969840 (whatsapp as well)
* email : soeyahtet@u.nus.edu

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h1>Thanks for evaluating this assignment.</h1>
