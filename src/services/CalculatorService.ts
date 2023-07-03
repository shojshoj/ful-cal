//This is using the https://api.mathjs.org API

export default class CalculatorService{

    async performCalculation(data){
        const myHeaders: Headers = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw: string = JSON.stringify({
            expr: [
                data
            ]
        });

        const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect // Specify the desired redirect option here
        };

        try {
            let response;
            await fetch("http://api.mathjs.org/v4/", requestOptions)
            .then(response => response.text())
            .then((result) => {
                // console.log(result)
                //parse result to json
                response = JSON.parse(result)
                // console.log(result)
            })
            // return response
            return response
        } catch (e) {
            console.error(e)
        }
    }

}

const calculatorService = new CalculatorService();
export { calculatorService }
