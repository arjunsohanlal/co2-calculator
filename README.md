# **co2-calculator**: A simple calculator for CO<sub>2</sub> emissions
## Overview
It's a simple program that returns the amount of CO<sub>2</sub>-equivalent that will be caused using a given transportation method.
## Instructions
- Download and install **Node.js** and **npm** using a Node.js installer from here: https://nodejs.org/en/download/

    To verify your install, type `node -v` into your terminal and it should give you the following output:
    ```shell
    $ node -v
    v10.15.1
    ```
- Open a terminal and run the following command to install the required dependencies:
    ```shell
    $ npm install
    ```
- Then, run the script with the following command:
    ```shell
    $ node co2-calculator [parameters]
    ```
    Parameters are:
    1. `--distance` **(mandatory)**: Any numeric value representing distance travelled.
    2. `--transportation-method` **(mandatory)**: One of the following transportation methods (corresponding CO<sub>2</sub> emissions per passenger per km are also mentioned for reference):
        - Small cars:
            - `small-diesel-car` : 142g 
            - `small-petrol-car` : 154g 
            - `small-plugin-hybrid-car` : 73g 
            - `small-electric-car` : 50g 
        - Medium cars:
            - `medium-diesel-car` : 171g 
            - `medium-petrol-car` : 192g 
            - `medium-plugin-hybrid-car` : 110g 
            - `medium-electric-car` : 58g 
        - Large cars: 
            - `large-diesel-car` : 209g 
            - `large-petrol-car` : 282g 
            - `large-plugin-hybrid-car` : 126g 
            - `large-electric-car` : 73g 
        - `bus` : 27g 
        - `train` : 6g
        
        Source: [BEIS/Defra Greenhouse Gas Conversion Factors 2019](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2019)
    3. `--unit-of-distance`: Measurement unit for `--distance`;  either `km` or `m`, defaults to `km`.
    4. `--output`: Measurement unit for CO<sub>2</sub> emissions; either `kg` or `g`, defaults to appropriate units based on value.
    
    Here's an example with an output:
    ```shell
    $ node co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
    
    Your trip caused 2.6kg of CO2-equivalent.
    ```

> This is a submission for an assessment pertaining to the application as Cloud Native Developer (Java/JavaScript) for Climate 21. Applicant name is Arjun Kelamangalam Sohanlal (arjunsohanlal@gmail.com).